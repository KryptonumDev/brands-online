import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { regex } from '@/global/constants';
import { removeHtmlTags } from '@/utils/functions';

const resend = new Resend(process.env.RESEND_API_KEY);

const isValidEmail = (email) => {
  return regex.email.test(email.toLowerCase());
}
const isValidPhone = (phone) => {
  return regex.phone.test(phone);
}

const constructMessage = (data) => {
  const {
    services='',
    budget='',
    deadline='',
    name='',
    email='',
    phone='',
    company='',
    message='',
    legal=''
  } = data;

  function formatServicesObject(jsonObj) {
    const keys = Object.keys(jsonObj);
    const formattedArray = [];
    for (const key of keys) {
      const value = jsonObj[key];
      if (value) {
        let formattedValue = value;
        if (Array.isArray(value)) {
          formattedValue = value.join(', ');
        }
        formattedArray.push(`<b>${key}:</b> ${formattedValue}`);
      }
    }
    if (formattedArray.length > 0) {
      return formattedArray.join(' ');
    } else {
      return '<b>Not specified</b>';
    }
  }

  return `
<p>Name: <b>${name}</b></p>
<p>Email: <b>${email}</b></p>
<p>Phone: <b>${phone || 'Not specified'}</b></p>
<p>Company: <b>${company || 'Not specified'}</b></p>
<p>Budget: <b>${budget !== null ? budget : 'Not specified'}</b></p>
<p>Deadline: <b>${deadline !== null ? deadline : 'Not specified'}</b></p>
<p>Services: ${formatServicesObject(services)}</p>

${message && `<p>${message}</p>`}

<br /><br />
<p>${legal && 'Privacy policy accepted'}</p>`;
}

const emailData = {
  from: 'BrandsOnline <hello@brandsonline.com>',
  to: 'kryptonumstudio@gmail.com',
}

export async function POST(request) {
  const req = await request.json();
  const { name='', email='', phone='', legal=false } = req;

  if((name.trim().length === 0
  ||
  !isValidEmail(email)
  ||
  (phone && !isValidPhone(phone))
  ||
  !legal)){
    return NextResponse.json({ success: false }, { status: 422 })
  }
  
  const messageBody = constructMessage(req);

  try {
    await resend.emails.send({
      from: emailData.from,
      reply_to: email,
      to: emailData.to,
      subject: `[Contact Form] - ${name} sent a message`,
      html: messageBody,
      text: removeHtmlTags(messageBody),
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}

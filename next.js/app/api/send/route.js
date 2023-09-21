import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const email = {
  from: 'BrandsOnline <hello@brandsonline.com>',
  to: 'kryptonumstudio@gmail.com',
}

export async function POST() {
  try {
    await resend.emails.send({
      from: email.from,
      to: email.to,
      subject: 'Hello world',
      html: 'Hello!',
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false });
  }
}

'use client'
import { useState } from 'react';
import styles from './styles.module.scss';
import { AnimatePresence } from 'framer-motion';
import Indicator from './Indicator';
import Hero from './Hero';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import { useForm } from 'react-hook-form';
import Status from './Status';
import Sending from './Sending';

const ContactForm = ({
  data: {
    hero_Heading,
    hero_Paragraph,
    hero_Hint,
    hero_Cta,
    step1_Heading,
    step1_Paragraph,
    step1_Options,
    step2_Heading,
    step2_Paragraph,
    step2_Options,
    step3_Heading,
    step3_Paragraph,
    step3_Options,
    step4_Heading,
    step4_Paragraph,
    success_Heading,
    success_Paragraph,
    success_Cta,
    error_Heading,
    error_Paragraph,
    error_Cta,
  }
}) => {
  const [ status, setStatus ] = useState({ sending: false });
  const [ step, setStep ] = useState(0);
  const maxSteps = 4;

  const animation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: 'all' })

  const onSubmit = (data) => {
    setStatus({ sending: true });
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(response => {
        if (response.success) {
          setStatus(prevStatus => ({ ...prevStatus, success: true }));
          reset();
        } else {
          setStatus(prevStatus => ({ ...prevStatus, success: false }));
        }
      })
      .catch(() => {
        setStatus(prevStatus => ({ ...prevStatus, success: false }));
      })
  }

  return (
    <form
      className={styles.wrapper}
      onSubmit={handleSubmit(onSubmit)}
    >
      <AnimatePresence mode='wait' initial={false}>
        {status.success === undefined ? (
          <>
            {step > 0 && (
              <Indicator
                step={step}
                maxSteps={maxSteps}
                initial={{ opacity: 0 }}
                animate={step > 0 ? { opacity: 1 } : { opacity: 0 }}
                exit={{ opacity: 0 }}
              />
            )}
            {step === 0 && (
              <Hero
                stylesWrapper={styles}
                heading={hero_Heading}
                paragraph={hero_Paragraph}
                hint={hero_Hint}
                cta={hero_Cta}
                setStep={setStep}
                key="step0"
                {...animation}
              />
            )}
            {step === 1 && (
              <Step1
                stylesWrapper={styles}
                heading={step1_Heading}
                paragraph={step1_Paragraph}
                options={step1_Options}
                setStep={setStep}
                step={step}
                key="step1"
                {...animation}
                form={{
                  register,
                  errors,
                }}
              />
            )}
            {step === 2 && (
              <Step2
                stylesWrapper={styles}
                heading={step2_Heading}
                paragraph={step2_Paragraph}
                options={step2_Options}
                setStep={setStep}
                step={step}
                key="step2"
                {...animation}
                form={{
                  register,
                  errors,
                }}
              />
            )}
            {step === 3 && (
              <Step3
                stylesWrapper={styles}
                heading={step3_Heading}
                paragraph={step3_Paragraph}
                options={step3_Options}
                setStep={setStep}
                step={step}
                key="step3"
                {...animation}
                form={{
                  register,
                  errors,
                }}
              />
            )}
            {step === 4 && (
              <Step4
                stylesWrapper={styles}
                heading={step4_Heading}
                paragraph={step4_Paragraph}
                setStep={setStep}
                step={step}
                key="step4"
                {...animation}
                form={{
                  register,
                  errors,
                }}
              />
            )}
            {status.sending && (
              <Sending {...animation} />
            )}
          </>
        ) : (
          status.success ? (
            <Status.Success
              heading={success_Heading}
              paragraph={success_Paragraph}
              cta={success_Cta}
              {...animation}
            />
          ) : (
            <Status.Error
              heading={error_Heading}
              paragraph={error_Paragraph}
              cta={error_Cta}
              setStatus={setStatus}
              {...animation}
            />
          )
        )}
      </AnimatePresence>
    </form>
  );
};

export default ContactForm;


export const BackStep = ({ setStep, step }) => {
  const [backStepDisabled, setBackStepDisabled] = useState(false);
  const backStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setBackStepDisabled(true);
    setStep(step - 1);
    setTimeout(() => {
      setBackStepDisabled(false);
    }, 300);
  }
  return (
    <button
      type="button"
      disabled={backStepDisabled}
      onClick={() => backStep()}
    >
      <BackStepArrow />
      <span>Previous step</span>
    </button>
  )
}
const BackStepArrow = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='23' height='20' fill='none'>
    <path
      fill='url(#paint0_linear_731_6867)'
      d='M22.75 14.013V5.72H9.898V.103L0 10l9.898 9.898v-5.885H22.75z'
    ></path>
    <defs>
      <linearGradient
        id='paint0_linear_731_6867'
        x1='22.75'
        x2='0'
        y1='10'
        y2='10'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#14E5D7'></stop>
        <stop offset='1' stopColor='#00C2B5'></stop>
      </linearGradient>
    </defs>
  </svg>
)
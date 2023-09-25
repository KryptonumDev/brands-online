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
          // reset();
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
      <Indicator
        step={step}
        setStep={setStep}
        maxSteps={maxSteps}
        initial={{ height: 0 }}
        animate={step > 0 ? { height: 'auto' } : { height: 0 }}
        exit={{ height: 0 }}
      />
      <AnimatePresence mode='wait' initial={false}>
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
            key="step4"
            {...animation}
            form={{
              register,
              errors,
            }}
          />
        )}
      </AnimatePresence>
    </form>
  );
};

export default ContactForm;
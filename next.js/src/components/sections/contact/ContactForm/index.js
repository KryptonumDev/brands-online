'use client'
import { useState } from 'react';
import styles from './styles.module.scss';
import Hero from './Hero';
import Step1 from './Step1';
import { AnimatePresence } from 'framer-motion';
import Indicator from './Indicator';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

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
  const [ step, setStep ] = useState(0);
  const maxSteps = 4;
  return (
    <div className={styles.wrapper}>
      {step > 0 && (
        <Indicator
          step={step}
          setStep={setStep}
          maxSteps={maxSteps}
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
        />
      )}
      <AnimatePresence mode='wait'>
        {step === 0 && (
          <Hero
            stylesWrapper={styles}
            heading={hero_Heading}
            paragraph={hero_Paragraph}
            hint={hero_Hint}
            cta={hero_Cta}
            setStep={setStep}
            key="step0"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -13 }}
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
            initial={{ opacity: 0, y: 13 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -13 }}
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
            initial={{ opacity: 0, y: 13 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -13 }}
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
            initial={{ opacity: 0, y: 13 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -13 }}
          />
        )}
        {step === 4 && (
          <Step4
            stylesWrapper={styles}
            heading={step4_Heading}
            paragraph={step4_Paragraph}
            setStep={setStep}
            key="step4"
            initial={{ opacity: 0, y: 13 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -13 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
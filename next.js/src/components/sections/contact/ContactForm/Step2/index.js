import Markdown from '@/utils/Markdown';
import styles from './styles.module.scss';
import InputTag from '@/components/moleculas/InputTag';
import { motion } from 'framer-motion';
import NextStepBtn from '../NextStepBtn';
import { BackStep } from '..';

const Step2 = ({
  stylesWrapper,
  heading,
  paragraph,
  options,
  setStep,
  step,
  form: {
    register,
    errors
  },
  ...props
}) => {
  return (
    <motion.section
      {...props}
    >
      <header className={stylesWrapper.header}>
        <Markdown.h2>{heading}</Markdown.h2>
        <Markdown className={stylesWrapper.paragraph}>{paragraph}</Markdown>
      </header>
      <div className={styles.options}>
        {options.map((item, i) => (
          <InputTag
            type="radio"
            key={i}
            value={item}
            register={register('budget')}
            errors={errors}
            >{item}</InputTag>
        ))}
      </div>
      <div className={stylesWrapper.ButtonContainer}>
        <BackStep setStep={setStep} step={step} />
        <NextStepBtn setStep={setStep} step={3} />
      </div>
    </motion.section>
  );
};

export default Step2;
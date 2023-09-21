import Markdown from '@/utils/Markdown';
import styles from './styles.module.scss';
import InputTag from '@/components/atoms/InputTag';
import { motion } from 'framer-motion';
import NextStepBtn from '../NextStepBtn';

const Step2 = ({ stylesWrapper, heading, paragraph, options, setStep, ...props }) => {
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
            name='budget'
          >{item}</InputTag>
        ))}
      </div>
      <NextStepBtn setStep={setStep} step={3} className={stylesWrapper.nextStepBtn} />
    </motion.section>
  );
};

export default Step2;
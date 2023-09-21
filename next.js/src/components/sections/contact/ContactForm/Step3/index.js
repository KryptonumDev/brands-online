import Markdown from '@/utils/Markdown';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import InputTag from '@/components/atoms/InputTag';
import NextStepBtn from '../NextStepBtn';

const Step3 = ({ stylesWrapper, heading, paragraph, options, setStep, ...props }) => {
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
            name='deadline'
          >{item}</InputTag>
        ))}
      </div>
      <NextStepBtn setStep={setStep} step={4} className={stylesWrapper.nextStepBtn} />
    </motion.section>
  );
};

export default Step3;
import Markdown from '@/utils/Markdown';
import { motion } from 'framer-motion';
import NextStepBtn from '../NextStepBtn';

const Step4 = ({ stylesWrapper, heading, paragraph, setStep, ...props }) => {
  return (
    <motion.section
      {...props}
    >
      <header className={stylesWrapper.header}>
        <Markdown.h2>{heading}</Markdown.h2>
        <Markdown className={stylesWrapper.paragraph}>{paragraph}</Markdown>
      </header>
      <NextStepBtn setStep={setStep} step={4} className={stylesWrapper.nextStepBtn} />
    </motion.section>
  );
};

export default Step4;
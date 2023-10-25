import Markdown from '@/utils/Markdown';
import { motion } from 'framer-motion';
import NextStepBtn from './NextStepBtn';

const Hero = ({
  stylesWrapper,
  heading,
  paragraph,
  hint,
  cta,
  setStep,
  ...props
}) => {
  return (
    <motion.section
      {...props}
    >
      <header>
        <Markdown.h1>{heading}</Markdown.h1>
        <Markdown className={stylesWrapper.paragraph}>{paragraph}</Markdown>
        {hint && (
          <p className={stylesWrapper.hint}>{hint}</p>
        )}
        <div className={`${stylesWrapper.ButtonContainer} ${stylesWrapper.HeroButtonContainer}`}>
          <NextStepBtn setStep={setStep} step={1} text={cta} />
        </div>
      </header>
    </motion.section>
  );
};

export default Hero;
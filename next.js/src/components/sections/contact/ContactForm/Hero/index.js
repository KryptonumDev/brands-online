import Markdown from '@/utils/Markdown';
import Button from '@/components/atoms/Button';
import { motion } from 'framer-motion';

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
        <Button
          className={stylesWrapper.cta}
          theme="primary"
          onClick={() => setStep(1)}
        >{cta}</Button>
      </header>
    </motion.section>
  );
};

export default Hero;
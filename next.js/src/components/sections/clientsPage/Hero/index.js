'use client'
import { lazy, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Markdown from '@/utils/Markdown';
import Button from '@/components/atoms/Button';
import { motion, useSpring, useTransform, useScroll } from 'framer-motion';
import RenderPlaceholder from '@/components/atoms/RenderPlaceholder';
const Render = lazy(() => import('./Render'));

const Hero = ({
  data: {
    hero_Heading,
    hero_Paragraph,
    hero_Cta,
  }
}) => {
  const [ isMounted, setIsMounted ] = useState(false);
  const [ isLoading, setIsLoading ] = useState(true);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const wrapper = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ['start end', 'end start']
  })

  const options = { damping: 50 }
  const progress = useSpring(useTransform(scrollYProgress, [0, 1], [-10, -2]), options);

  const glassEffectProgress = useTransform(scrollYProgress, [0, 1], ["100vh", "-80vh"]);

  return (
    <section className={styles.wrapper} ref={wrapper}>
      <header>
        <Markdown.h1>{hero_Heading}</Markdown.h1>
        <Markdown className={styles.paragraph}>{hero_Paragraph}</Markdown>
        <Button data={hero_Cta} />
      </header>
      <div className={styles.render}>
        <RenderPlaceholder loading={isLoading} className={styles.placeholder} />
        {!isMounted ? null : (
          <Render progress={progress} setIsLoading={setIsLoading} />
        )}
      </div>
      <motion.div
        className={styles.glassEffect}
        style={{ y: glassEffectProgress }}
      ><div /><div /><div /><div /><div /><div /></motion.div>
    </section>
  );
};

export default Hero;
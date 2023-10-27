'use client'
import { lazy, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Markdown from '@/utils/Markdown';
import Button from '@/components/atoms/Button';
import RenderPlaceholder from '@/components/atoms/RenderPlaceholder';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  }, [])


  const wrapper = useRef();
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ['start end', 'end start']
  })
  const glassEffectProgress = useTransform(scrollYProgress, [0, 1], ["80vh", "0vh"]);

  return (
    <section className={styles.wrapper} ref={wrapper}>
      <div className={styles.render}>
        <RenderPlaceholder size="large" className={styles.placeholder} loading={isLoading} />
        {!isMounted ? null : (
          <Render setIsLoading={setIsLoading} />
        )}
      </div>
      <header>
        <Markdown.h1>{hero_Heading}</Markdown.h1>
        <Markdown className={styles.paragraph}>{hero_Paragraph}</Markdown>
        <Button data={hero_Cta} />
      </header>
      <motion.div
        className={styles.glassEffect}
        style={{ y: glassEffectProgress }}
      ><div /><div /><div /><div /></motion.div>
    </section>
  );
};

export default Hero;
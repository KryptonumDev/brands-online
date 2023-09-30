'use client'
import { lazy, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Markdown from '@/utils/Markdown';
import Button from '@/components/atoms/Button';
import { useSpring, useTransform, useScroll } from 'framer-motion';
import { RenderPlaceholder } from '@/components/atoms/Icons';
const Render = lazy(() => import('./Render'));

const Hero = ({
  data: {
    hero_Heading,
    hero_Paragraph,
    hero_Cta,
  }
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const wrapper = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ['start end', 'end start']
  })

  const options = { damping: 20 }
  const progress = useSpring(useTransform(scrollYProgress, [0, 1], [-9, -4]), options);

  return (
    <section className={styles.wrapper} ref={wrapper}>
      <header>
        <Markdown.h1>{hero_Heading}</Markdown.h1>
        <Markdown className={styles.paragraph}>{hero_Paragraph}</Markdown>
        <Button data={hero_Cta} />
      </header>
      <div className={styles.render}>
        {!isMounted ? null : (
          <Render progress={progress} />
        )}
        <RenderPlaceholder />
      </div>
    </section>
  );
};

export default Hero;
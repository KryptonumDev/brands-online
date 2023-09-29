'use client'
import { lazy, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Markdown from '@/utils/Markdown';
import Button from '@/components/atoms/Button';
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
  return (
    <section className={styles.wrapper}>
      <div className={styles.render}>
        {!isMounted ? null : (
          <Render />
        )}
      </div>
      <header>
        <Markdown.h1>{hero_Heading}</Markdown.h1>
        <Markdown className={styles.paragraph}>{hero_Paragraph}</Markdown>
        <Button data={hero_Cta} />
      </header>
    </section>
  );
};

export default Hero;
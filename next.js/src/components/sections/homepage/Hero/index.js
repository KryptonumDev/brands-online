'use client'
import { lazy, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import Markdown from '@/utils/Markdown';
import Button from '@/components/atoms/Button';
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

  return (
    <section className={styles.wrapper}>
      <header>
        <Markdown.h1>{hero_Heading}</Markdown.h1>
        <Markdown className={styles.paragraph}>{hero_Paragraph}</Markdown>
        <Button data={hero_Cta} />
      </header>
      <div className={styles.render}>
        <RenderPlaceholder className={styles.placeholder} loading={isLoading} />
        {!isMounted ? null : (
          <Render setIsLoading={setIsLoading} />
        )}
      </div>
    </section>
  );
};

export default Hero;
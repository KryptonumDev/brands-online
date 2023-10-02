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
  const [ isMounted, setIsMounted ] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, [])

  return (
    <section className={styles.wrapper}>
      <div className={styles.render}>
        <div className={styles.renderFloating}>
          {!isMounted ? null : (
            <Render />
          )}
        </div>
        <Placeholder />
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

const Placeholder = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='850' height='426' viewBox='0 0 850 426' fill='none'>
    <rect width='850' height='426' fill='url(#paint0_linear_746_7710)' rx='14.201'></rect><rect width='104' height='104' x='2' y='2' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='108' y='2' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='214' y='2' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='320' y='2' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='426' y='2' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='532' y='2' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='638' y='2' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='744' y='2' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='2' y='108' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='108' y='108' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='214' y='108' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='320' y='108' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='426' y='108' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='532' y='108' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='638' y='108' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='744' y='108' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='2' y='214' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='108' y='214' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='214' y='214' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='320' y='214' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='426' y='214' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='532' y='214' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='638' y='214' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='744' y='214' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='2' y='320' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='108' y='320' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='214' y='320' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='320' y='320' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='426' y='320' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='532' y='320' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='638' y='320' fill='#fff' rx='12.172'></rect><rect width='104' height='104' x='744' y='320' fill='#fff' rx='12.172'></rect><defs><linearGradient id='paint0_linear_746_7710' x1='839.017' x2='504.941' y1='422.996' y2='-250.678' gradientUnits='userSpaceOnUse'><stop stopColor='#E8E8E8'></stop><stop offset='1' stopColor='#fff'></stop></linearGradient></defs>
  </svg>
)
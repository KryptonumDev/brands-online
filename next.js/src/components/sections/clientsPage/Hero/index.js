'use client'
import { lazy, useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import Markdown from '@/utils/Markdown';
import Button from '@/components/atoms/Button';
import { useSpring, useTransform, useScroll } from 'framer-motion';
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
        <Background />
      </div>
    </section>
  );
};

const Background = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='382'
    height='382'
    viewBox='0 0 382 382'
    fill='none'
  >
    <rect
      width='381.691'
      height='381.691'
      fill='url(#paint0_linear_528_1069)'
      rx='12.784'
    ></rect>
    <rect
      width='93.14'
      height='93.14'
      x='1.826'
      y='1.826'
      fill='#fff'
      rx='10.958'
    ></rect>
    <rect
      width='93.14'
      height='93.14'
      x='96.793'
      y='1.826'
      fill='#fff'
      rx='10.958'
    ></rect>
    <rect
      width='93.14'
      height='93.14'
      x='191.759'
      y='1.826'
      fill='#fff'
      rx='10.958'
    ></rect>
    <rect
      width='93.14'
      height='93.14'
      x='286.725'
      y='1.826'
      fill='#fff'
      rx='10.958'
    ></rect>
    <rect
      width='93.14'
      height='93.14'
      x='1.826'
      y='96.793'
      fill='#fff'
      rx='10.958'
    ></rect>
    <rect
      width='93.14'
      height='93.14'
      x='96.793'
      y='96.793'
      fill='#fff'
      rx='10.958'
    ></rect>
    <rect
      width='93.14'
      height='93.14'
      x='191.759'
      y='96.793'
      fill='#fff'
      rx='10.958'
    ></rect>
    <rect
      width='93.14'
      height='93.14'
      x='286.725'
      y='96.793'
      fill='#fff'
      rx='10.958'
    ></rect>
    <rect
      width='93.14'
      height='93.14'
      x='1.826'
      y='191.759'
      fill='#fff'
      rx='10.958'
    ></rect>
    <rect
      width='93.14'
      height='93.14'
      x='96.793'
      y='191.759'
      fill='#fff'
      rx='10.958'
    ></rect>
    <rect
      width='93.14'
      height='93.14'
      x='191.759'
      y='191.759'
      fill='#fff'
      rx='10.958'
    ></rect>
    <rect
      width='93.14'
      height='93.14'
      x='286.725'
      y='191.759'
      fill='#fff'
      rx='10.958'
    ></rect>
    <rect
      width='93.14'
      height='93.14'
      x='1.826'
      y='286.725'
      fill='#fff'
      rx='10.958'
    ></rect>
    <rect
      width='93.14'
      height='93.14'
      x='96.793'
      y='286.725'
      fill='#fff'
      rx='10.958'
    ></rect>
    <rect
      width='93.14'
      height='93.14'
      x='191.759'
      y='286.725'
      fill='#fff'
      rx='10.958'
    ></rect>
    <rect
      width='93.14'
      height='93.14'
      x='286.725'
      y='286.725'
      fill='#fff'
      rx='10.958'
    ></rect>
    <defs>
      <linearGradient
        id='paint0_linear_528_1069'
        x1='376.759'
        x2='0.759'
        y1='379'
        y2='-1'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#E8E8E8'></stop>
        <stop offset='1' stopColor='#fff'></stop>
      </linearGradient>
    </defs>
  </svg>
)

export default Hero;
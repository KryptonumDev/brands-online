'use client';
import { useEffect } from 'react';
import styles from './styles.module.scss';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseEffect = () => {
  const blob = {
    x: useSpring(useMotionValue(0), { damping: 50 }),
    y: useSpring(useMotionValue(0), { damping: 50 }),
  }
  const cursor = {
    x: useSpring(useMotionValue(0), { damping: 50, stiffness: 600 }),
    y: useSpring(useMotionValue(0), { damping: 50, stiffness: 600 }),
  }
  const handleMouseMove = ({ clientX, clientY }) => {
    const x = clientX;
    const y = clientY;
    blob.x.set(x);
    blob.y.set(y);
    cursor.x.set(x);
    cursor.y.set(y);
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Cursor
        className={`${styles.cursor} cursor`}
        style={{
          left: cursor.x,
          top: cursor.y,
        }}
      />
      <motion.div
        className={`${styles.blob} mouseEffect`}
        aria-hidden="true"
        style={{
          left: blob.x,
          top: blob.y,
        }}
      >
        <div className={styles.blob1} />
        <div className={styles.blob2} />
        <div className={styles.blob3} />
        <div className={styles.blob4} />
        <div className={styles.blob5} />
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
      </motion.div>
    </>
  );
};

export default MouseEffect;

const Cursor = ({ ...props }) => (
  <motion.svg
    xmlns='http://www.w3.org/2000/svg'
    width='46'
    height='46'
    fill='none'
    viewBox='0 0 46 46'
    {...props}
  >
    <rect
      width='45'
      height='45'
      x='0.5'
      y='0.5'
      fill='url(#paint0_linear_1534_9822)'
      fillOpacity='0.2'
      rx='22.5'
    ></rect>
    <circle
      cx='23'
      cy='23'
      r='3'
      fill='url(#paint1_linear_1534_9822)'
    ></circle>
    <rect
      width='45'
      height='45'
      x='0.5'
      y='0.5'
      stroke='url(#paint2_linear_1534_9822)'
      rx='22.5'
    ></rect>
    <defs>
      <linearGradient
        id='paint0_linear_1534_9822'
        x1='46'
        x2='0'
        y1='23'
        y2='23'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#D2FB67'></stop>
        <stop offset='1' stopColor='#00C2B5'></stop>
      </linearGradient>
      <linearGradient
        id='paint1_linear_1534_9822'
        x1='26'
        x2='20'
        y1='23'
        y2='23'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#14E5D7'></stop>
        <stop offset='1' stopColor='#00C2B5'></stop>
      </linearGradient>
      <linearGradient
        id='paint2_linear_1534_9822'
        x1='46'
        x2='0'
        y1='23'
        y2='23'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#D2FB67'></stop>
        <stop offset='1' stopColor='#00C2B5'></stop>
      </linearGradient>
    </defs>
  </motion.svg>
)
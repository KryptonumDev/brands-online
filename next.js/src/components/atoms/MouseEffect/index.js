'use client';
import { useEffect } from 'react';
import styles from './styles.module.scss';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseEffect = () => {
  const blob = {
    x: useSpring(useMotionValue(0), { damping: 15 }),
    y: useSpring(useMotionValue(0), { damping: 15 }),
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
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='30.71 36.71 117.16 116.7'
        >
          <path fill='url(#paint0_linear_1421_3068)'
            d=''
          >
            <animate
              attributeName='d'
              dur='10s'
              repeatCount='indefinite'
              values='M143.5 85.3c7.8 24.5 5.4 51.6-9.3 62.5-14.7 10.8-41.7 5.3-65.1-10.5C45.7 121.6 26 95.6 31.7 73.8c5.8-21.7 37-39.1 61.6-36.9 24.6 2.1 42.4 23.9 50.2 48.4z;
              M167.4 73.5c5.6 21.9-14 47.5-39 65.7-25 18.2-55.5 29-73.5 17.3-18-11.8-23.6-46.2-14-73.6 9.6-27.4 34.3-47.8 62.2-48.8 27.8-1 58.7 17.4 64.3 39.4z;
              M140.6 80.4c5.1 22.1-2.4 41.9-21.1 58.2-18.6 16.3-48.3 29-62.8 19-14.5-10.1-13.9-43-4.1-71.5 9.7-28.5 28.6-52.5 46.9-52.3 18.3.1 36 24.5 41.1 46.6z;
              M143.5 85.3c7.8 24.5 5.4 51.6-9.3 62.5-14.7 10.8-41.7 5.3-65.1-10.5C45.7 121.6 26 95.6 31.7 73.8c5.8-21.7 37-39.1 61.6-36.9 24.6 2.1 42.4 23.9 50.2 48.4z;'
            ></animate>
          </path>
          <defs>
            <linearGradient
              id='paint0_linear_1421_3068'
              x1='0.326'
              x2='316.671'
              y1='165.324'
              y2='165.324'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0.354' stopColor='#0FE'></stop>
              <stop offset='1' stopColor='#009086'></stop>
            </linearGradient>
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
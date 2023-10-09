'use client';
import { useEffect } from 'react';
import styles from './styles.module.scss';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MouseEffect = () => {
  const options = {
    damping: 20
  }
  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  }

  const handleMouseMove = ({ clientX, clientY }) => {
    const x = clientX;
    const y = clientY;
    mouse.x.set(x);
    mouse.y.set(y);
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
    <motion.div
      className={`${styles.wrapper} mouseEffect`}
      aria-hidden="true"
      style={{
        left: mouse.x,
        top: mouse.y,
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0.33 0.07 316.34 330.5'
      >
        <path
          fill='url(#paint0_linear_1421_3068)'
          fillOpacity='0.12'
          d='M41.386 101.626C9.85 154.525-12.27 214.668 8.316 258.787c20.368 44.12 83.44 72.435 145.198 71.777 61.977-.659 122.859-29.852 148.482-77.045 25.623-46.973 15.768-111.944-14.673-164.185C256.882 37.092 205.636-2.637 159.646.216c-45.99 3.073-86.943 48.73-118.26 101.41z'
        ></path>
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
  );
};

export default MouseEffect;
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
          top: blob.y,
          left: blob.x,
        }}
      >
        <Blob.First />
        <Blob.Second />
        <Blob.Third />
        <svg xmlns="http://www.w3.org/2000/svg" id={styles.goo}>
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

const Blob = {
  "First": ({ ...props }) => (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width='543'
      height='514'
      fill='none'
      viewBox='0 0 543 514'
      {...props}
    >
      <path
        fill='url(#paint0_linear_1589_3112)'
        d='M243.574 147.017c17.059-3.661 34.194-3.211 51.626-2.482 20.777.869 42.855-2.627 61.181 7.201 19.011 10.195 41.336 26.583 42.023 48.143.784 24.608-28.802 39.312-38.516 61.935-5.804 13.516-3.983 28.597-6.573 43.077-3.471 19.406 3.341 44.167-11.378 57.281-14.245 12.691-37.509 5.576-56.429 3.128-15.856-2.051-28.529-16.591-44.513-16.185-24.435.62-47.104 28.041-69.85 19.089-19.676-7.743-25.756-35.752-26.21-56.893-.442-20.569 21.235-35.7 23.784-56.115 2.24-17.938-15.515-35.287-10.212-52.568 5.216-16.997 22.765-27.106 37.647-36.834 14.41-9.421 30.587-15.164 47.42-18.777z'
      ></path>
      <defs>
        <linearGradient
          id='paint0_linear_1589_3112'
          x1='391.713'
          x2='149.344'
          y1='180.498'
          y2='345.41'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#14E5D7'></stop>
          <stop offset='1' stopColor='#00C2B5'></stop>
        </linearGradient>
      </defs>
    </motion.svg>
  ),
  "Second": ({ ...props }) => (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width='555'
      height='545'
      fill='none'
      viewBox='0 0 555 545'
      {...props}
    >
      <path
        fill='url(#paint0_linear_1589_3113)'
        d='M403.608 321.071c-5.271 21.41-14.846 43.034-31.916 56.989-16.493 13.483-39.409 14.549-60.354 18.441-16.887 3.139-33.657 2.26-50.834 2.222-16.672-.037-34.356 4.885-49.33-2.446-14.926-7.306-21.869-24.234-32.03-37.383-9.756-12.626-24.372-23.115-26.895-38.871-2.522-15.748 14.444-29.387 13.415-45.303-1.503-23.231-26.033-43.177-20.601-65.814 4.937-20.575 28.217-31.372 46.484-42.049 18.737-10.951 40.114-27.031 60.87-20.694 22.706 6.932 30.101 35.566 45.896 53.29 9.931 11.144 17.11 25.216 30.297 32.211 22.953 12.176 56.803 2.944 73.501 22.85 14.443 17.218 6.87 44.736 1.497 66.557z'
      ></path>
      <defs>
        <linearGradient
          id='paint0_linear_1589_3113'
          x1='269.754'
          x2='282.441'
          y1='402.295'
          y2='146.661'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#D2FB67'></stop>
          <stop offset='1' stopColor='#00C2B5'></stop>
        </linearGradient>
      </defs>
    </motion.svg>
  ),
  "Third": ({ ...props }) => (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width='559'
      height='500'
      fill='none'
      viewBox='0 0 559 500'
      {...props}
    >
      <path
        fill='url(#paint0_linear_1589_3111)'
        d='M394.072 181.351c11.314 16.868 11.818 38.017 14.196 58.189 2.664 22.599 12.251 47.571.571 67.099-11.684 19.537-39.085 21.001-59.402 31.269-19.228 9.717-35.892 30.862-57.196 27.654-21.716-3.27-32.713-27.708-47.983-43.492-11.537-11.925-18.298-27.125-30.842-37.986-20.754-17.971-57.484-20.302-66.444-46.252-8.192-23.727 6.946-53.487 26.628-69.066 19.803-15.674 48.882-5.965 73.747-10.382 15.892-2.822 30.276-9.187 46.32-10.942 17.829-1.95 35.896-5.649 52.888.089 18.738 6.328 36.5 17.394 47.517 33.82z'
      ></path>
      <defs>
        <linearGradient
          id='paint0_linear_1589_3111'
          x1='220.261'
          x2='433.282'
          y1='240.935'
          y2='206.928'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#CFFA5B'></stop>
          <stop offset='0.922' stopColor='#EAFFAF'></stop>
          <stop offset='1' stopColor='#EBFFB6'></stop>
        </linearGradient>
      </defs>
    </motion.svg>
  )
}
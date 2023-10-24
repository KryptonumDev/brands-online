'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import Markdown from '@/utils/Markdown';
import styles from './styles.module.scss';
import { easing } from '@/global/constants';

const Content = ({ content }) => {
  const [opened, setOpened] = useState(0);
  const handleClick = (e, i) => {
    e.preventDefault();
    setOpened(i);
  }

  return (
    <section className={styles.wrapper}>
      {content.map(({ title, description }, i) => (
        <details
          key={i}
          open
          data-opened={opened === i}
        >
          <summary
            onClick={(e) => handleClick(e, i)}
          >
            <Markdown components={{ p: 'span' }}>{title}</Markdown>
            <Arrow
              className={styles.indicator}
              initial={i === 0 ? { rotate: -90 } : { rotate: 0 }}
              animate={opened === i ? { rotate: -90 } : { rotate: 0 }}
              transition={{
                duration: '0',
              }}
            />
          </summary>
          <motion.div
            className={styles.description}
            initial={i === 0 ? { height: 'auto', marginBottom: '28px' } : { height: 0, marginBottom: '0' }}
            animate={opened === i ? { height: 'auto', marginBottom: '28px' } : { height: 0, marginBottom: '0' }}
            transition={{
              duration: '.8',
              ease: easing
            }}
          >
            <Markdown>{description}</Markdown>
          </motion.div>
        </details>
      ))}
    </section>
  );
};

export default Content;

const Arrow = ({ ...props }) => (
  <motion.svg xmlns='http://www.w3.org/2000/svg' width='23' height='23' fill='none' {...props}>
    <path
      stroke='url(#paint0_linear_747_7859)'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M22 1v21m0 0H1m21 0L1.913 1.467'
    ></path>
    <defs>
      <linearGradient
        id='paint0_linear_747_7859'
        x1='11.5'
        x2='11.5'
        y1='22'
        y2='1'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#14E5D7'></stop>
        <stop offset='1' stopColor='#00C2B5'></stop>
      </linearGradient>
    </defs>
  </motion.svg>
)
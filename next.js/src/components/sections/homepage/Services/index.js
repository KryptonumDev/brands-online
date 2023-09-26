'use client'
import { useState } from 'react';
import Tag from '@/components/atoms/Tag';
import styles from './styles.module.scss';
import Markdown from '@/utils/Markdown';
import Button from '@/components/atoms/Button';
import Img from '@/utils/Img';
import { easing } from '@/global/constants';
import { motion } from 'framer-motion'

const Services = ({
  data: {
    services_Tag,
    services_Heading,
    services_Paragraph,
    services_Cta,
    services_List,
  }
}) => {
  const [opened, setOpened] = useState(0);
  const handleClick = (e, i) => {
    e.preventDefault();
    setOpened(i);
  }
  return (
    <section className={styles.wrapper}>
      <header>
        <Tag className={styles.tag}>{services_Tag}</Tag>
        <Markdown.h2>{services_Heading}</Markdown.h2>
        <Markdown className={styles.paragraph}>{services_Paragraph}</Markdown>
        <Button data={services_Cta} />
      </header>
      <div className={styles.list}>
        {services_List.map(({ title, description, img }, i) => (
          <details
            key={i}
            open
            data-opened={opened === i}
          >
            <summary onClick={(e) => handleClick(e, i)}>
              <Markdown components={{ p: 'span' }}>{title}</Markdown>
              <Arrow
                className={styles.arrow}
                initial={i === 0 ? { rotate: 0 } : { rotate: 90 }}
                animate={opened === i ? { rotate: 0 } : { rotate: 90 }}
                transition={{
                  duration: '0',
                }}
              />
            </summary>
            <motion.div
              className={styles.content}
              initial={i === 0 ? { height: 'auto' } : { height: 0 }}
              animate={opened === i ? { height: 'auto' } : { height: 0 }}
              transition={{
                duration: '.6',
                ease: easing
              }}
            >
              <Markdown className={styles.description}>{description}</Markdown>
              <Shape className={styles.shape} />
              <Img data={img} />
            </motion.div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Services;

const Arrow = ({ ...props }) => (
  <motion.svg xmlns='http://www.w3.org/2000/svg' width='23' height='25' fill='none' {...props}>
    <path
      stroke='url(#paint0_linear_537_1134)'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
      d='M1.063 1.99H22m0 0v21.403M22 1.99L1.528 22.462'
    ></path>
    <defs>
      <linearGradient
        id='paint0_linear_537_1134'
        x1='22'
        x2='1.063'
        y1='12.691'
        y2='12.691'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#D2FB67'></stop>
        <stop offset='1' stopColor='#00C2B5'></stop>
      </linearGradient>
    </defs>
  </motion.svg>
)

const Shape = ({ ...props }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='516' height='97' viewBox='0 0 516 97' fill='none' {...props}>
    <path
      fill='var(--neutral-100)'
      d='M.167 96.5V0C.785 25.375 15.489 37.25 36 38.875l189.795.75c10.719-.688 12.788 7.156 12.788 9.969 0 9.437-7.969 11.375-12.85 11.156H36C8.322 60.75.908 85 .167 96.5zM516 96.5V0c-.618 25.375-15.322 37.25-35.834 38.875l-189.794.75c-10.719-.688-12.789 7.156-12.789 9.969 0 9.437 7.97 11.375 12.851 11.156h189.732C507.845 60.75 515.259 85 516 96.5z'
    ></path>
  </svg>
)
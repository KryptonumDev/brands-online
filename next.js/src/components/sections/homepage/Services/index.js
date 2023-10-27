'use client'
import { lazy, useEffect, useRef, useState } from 'react';
import Tag from '@/components/atoms/Tag';
import styles from './styles.module.scss';
import Markdown from '@/utils/Markdown';
import Button from '@/components/atoms/Button';
import { easing } from '@/global/constants';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import RenderPlaceholder from '@/components/atoms/RenderPlaceholder';
const Render = lazy(() => import('./Render'));

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
  
  const [ isMounted, setIsMounted ] = useState(false);
  const canvas = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress: progress } = useScroll({
    target: canvas,
    offset: ['start end', 'end start']
  });

  const rotation = useSpring(useTransform(progress, [0, 1], [-3, 5]), { damping: 100 });

  return (
    <section>
      <div className={styles.column}>
        <header>
          <Tag className={styles.tag}>{services_Tag}</Tag>
          <Markdown.h2>{services_Heading}</Markdown.h2>
          <Markdown className={styles.paragraph}>{services_Paragraph}</Markdown>
          <Button data={services_Cta} />
        </header>
        <div className={styles.list}>
          {services_List.map(({ title, description }, i) => (
            <details
              key={i}
              open
              data-opened={opened === i}
            >
              <summary
                onClick={(e) => handleClick(e, i)}
                tabIndex={opened === i ? -1 : 0}
              >
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
              </motion.div>
            </details>
          ))}
        </div>
      </div>
      <div
        ref={canvas}
        className={styles.render}
      >
        {!isMounted ? <RenderPlaceholder /> : (
          <Render rotation={rotation} />
        )}
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
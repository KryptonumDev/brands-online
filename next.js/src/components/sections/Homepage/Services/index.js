'use client'
import { lazy, useEffect, useRef, useState } from 'react';
import Tag from '@/components/atoms/Tag';
import styles from './styles.module.scss';
import Markdown from '@/utils/Markdown';
import Button from '@/components/atoms/Button';
import { easing } from '@/global/constants';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
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

  const rotation = useSpring(useTransform(progress, [0, 1], [-8, 10]), { damping: 100 });
  const canvasY = useTransform(progress, [0, 1], ["25vh", "-25vh"]);

  const options = {
    damping: 50
  }
  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  }

  const mouseTransform = {
    x: useTransform(mouse.x, [0, 1], [-80, 80]),
    y: useTransform(mouse.y, [0, 1], [-80, 80]),
  }

  const handleMouseMove = ({ clientX, clientY }) => {
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth);
    const y = (clientY / innerHeight);
    mouse.x.set(x);
    mouse.y.set(y);
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const wrapper = useRef();
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ['start end', 'end start']
  })
  const glassEffectProgress = useTransform(scrollYProgress, [0, 1], ["80vh", "-50vh"]);

  return (
    <section>
      <div className={styles.column}>
        <header ref={wrapper}>
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
        <motion.div
          className={styles.glassEffect}
          style={{ y: glassEffectProgress }}
        ><div /><div /></motion.div>
      </div>
      <motion.div
        style={{
          x: mouseTransform.x,
          y: mouseTransform.y
        }}
      >
        <motion.div
          ref={canvas}
          className={styles.render}
          style={{ y: canvasY }}
        >
          {!isMounted ? <RenderPlaceholder /> : (
            <Render rotation={rotation} />
          )}
        </motion.div>
      </motion.div>
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
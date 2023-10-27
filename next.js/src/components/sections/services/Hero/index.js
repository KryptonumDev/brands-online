'use client'
import { useRef } from 'react';
import Markdown from '@/utils/Markdown';
import styles from './styles.module.scss';
import Tag from '@/components/atoms/Tag';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = ({
  data: {
    hero_Tag,
    hero_Heading,
  }
}) => {
  const wrapper = useRef();
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ['start end', 'end start']
  })
  const glassEffectProgress = useTransform(scrollYProgress, [0, 1], ["100vh", "-50vh"]);

  return (
    <section className={styles.wrapper} ref={wrapper}>
      <Tag className={styles.tag}>{hero_Tag}</Tag>
      <Markdown.h1>{hero_Heading}</Markdown.h1>
      <motion.div
        className={styles.glassEffect}
        style={{ y: glassEffectProgress }}
      ><div /><div /><div /><div /></motion.div>
    </section>
  );
};

export default Hero;
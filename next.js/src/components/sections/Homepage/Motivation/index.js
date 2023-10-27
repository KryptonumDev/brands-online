'use client'
import Markdown from '@/utils/Markdown';
import styles from './styles.module.scss';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Motivation = ({
  data: {
    motivation_Paragraph
  }
}) => {
  const wrapper = useRef();
  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ['start end', 'end start']
  })

  const glassEffectProgress = useTransform(scrollYProgress, [0, 1], ["100vh", "-80vh"]);
  
  return (
    <section className={styles.wrapper} ref={wrapper}>
      <Markdown.h2 className={styles.paragraph}>{motivation_Paragraph}</Markdown.h2>
      <motion.div
        className={styles.glassEffect}
        style={{ y: glassEffectProgress }}
      ><div /><div /><div /><div /><div /><div /><div /><div /><div /></motion.div>
    </section>
  );
};

export default Motivation;
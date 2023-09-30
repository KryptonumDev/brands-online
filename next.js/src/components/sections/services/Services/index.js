'use client';
import { lazy, useEffect, useRef, useState } from 'react';
import { useInView, useScroll, useSpring, useTransform } from "framer-motion"
import Button from '@/components/atoms/Button';
import styles from './styles.module.scss';
import Markdown from '@/utils/Markdown';
const Render = lazy(() => import('./Render'));

const Services = ({
  data: {
    services_List,
    services_Cta,
  }
}) => {
  const [ isMounted, setIsMounted ] = useState(false);
  const wrapper = useRef(null);
  const isInView = useInView(wrapper, {
    margin: "-50% 0px -50% 0px"
  });

  const { scrollYProgress } = useScroll({
    target: wrapper,
    offset: ['start end', 'end start']
  })

  const progress = useSpring(useTransform(scrollYProgress, [0, 1], [0, 8]), { damping: 50 });

  useEffect(() => {
    setIsMounted(true);
  }, [])


  return (
    <section className={styles.wrapper} ref={wrapper}>
      <div className={styles.render}>
        {!isMounted ? null : (
          <Render progress={progress} />
        )}
      </div>
      <ul className={styles.list}>
        {services_List.map(({ title, tags, description }, i) => (
          <li key={i}>
            <Markdown.h2 className={styles.title}>{title}</Markdown.h2>
            <ul className={styles.tags}>
              {tags.map((tag, i) => (
                <li key={i}>{tag}</li>
              ))}
            </ul>
            <Markdown className={styles.description}>{description}</Markdown>
          </li>
        ))}
      </ul>
      <Button
        data={services_Cta}
        className={`${styles.button} ${isInView ? styles.visible : ''}`}
      />
    </section>
  );
};

export default Services;
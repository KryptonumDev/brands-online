'use client';
import { lazy, useEffect, useRef, useState } from 'react';
import { useScroll, useSpring, useTransform } from "framer-motion"
import styles from './styles.module.scss';
import Markdown from '@/utils/Markdown';
import FloatingButton from './FloatingButton';
import { RenderPlaceholder } from '@/components/atoms/Icons';
const Render = lazy(() => import('./Render'));

const Services = ({
  data: {
    services_List,
    services_Cta,
  }
}) => {
  const [ isMounted, setIsMounted ] = useState(false);
  const wrapper = useRef(null);

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
        <RenderPlaceholder />
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
      <FloatingButton cta={services_Cta} wrapper={wrapper} />
    </section>
  );
};

export default Services;
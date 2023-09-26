'use client';
import { useRef } from 'react';
import { useInView } from "framer-motion"
import Button from '@/components/atoms/Button';
import styles from './styles.module.scss';
import Markdown from '@/utils/Markdown';

const Services = ({
  data: {
    services_List,
    services_Cta,
  }
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px"
  });

  return (
    <section className={styles.wrapper} ref={ref}>
      <div></div>
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
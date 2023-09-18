'use client';
import Button from '@/components/atoms/Button';
import styles from './styles.module.scss';
import Markdown from '@/utils/Markdown';

const Services = ({
  data: {
    services_List,
    services_Cta,
  }
}) => {
  return (
    <section className={styles.wrapper}>
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
      <Button data={services_Cta} />
    </section>
  );
};

export default Services;
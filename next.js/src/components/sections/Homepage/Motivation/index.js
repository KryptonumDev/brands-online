import Markdown from '@/utils/Markdown';
import styles from './styles.module.scss';

const Motivation = ({
  data: {
    motivation_Paragraph
  }
}) => {
  return (
    <section className={styles.wrapper}>
      <Markdown level='h2' className={styles.paragraph}>{motivation_Paragraph}</Markdown>
    </section>
  );
};

export default Motivation;
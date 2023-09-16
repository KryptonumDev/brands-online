import Markdown from '@/utils/Markdown';
import styles from './styles.module.scss';

const Motivation = ({
  data: {
    motivation_Paragraph
  }
}) => {
  return (
    <section className={styles.wrapper}>
      <Markdown.h2 className={styles.paragraph}>{motivation_Paragraph}</Markdown.h2>
    </section>
  );
};

export default Motivation;
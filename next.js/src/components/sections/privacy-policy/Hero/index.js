import Markdown from '@/utils/Markdown';
import styles from './styles.module.scss';
import readingTime from '@/utils/readingTime';

const Hero = ({
  data: {
    hero_Heading,
    hero_Paragraph,
    hero_readingTime,
  },
  content
}) => {
  const concatenatedText = content.map(item => `${item.title}\n\n${item.description}`).join('\n\n');
  return (
    <section className={styles.wrapper}>
      <Markdown.h1>{hero_Heading}</Markdown.h1>
      <Markdown className={styles.paragraph}>{hero_Paragraph}</Markdown>
      {hero_readingTime && (
        <p className={styles.readingTime}>Reading will take you about {readingTime(concatenatedText)}</p>
      )}
    </section>
  );
};

export default Hero;
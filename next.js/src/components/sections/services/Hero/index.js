import Markdown from '@/utils/Markdown';
import styles from './styles.module.scss';
import Tag from '@/components/atoms/Tag';

const Hero = ({
  data: {
    hero_Tag,
    hero_Heading,
  }
}) => {
  return (
    <section className={styles.wrapper}>
      <Tag className={styles.tag}>{hero_Tag}</Tag>
      <Markdown.h1>{hero_Heading}</Markdown.h1>
    </section>
  );
};

export default Hero;
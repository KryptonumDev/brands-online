import Tag from '@/components/atoms/Tag';
import styles from './styles.module.scss';
import Markdown from '@/utils/Markdown';
import Button from '@/components/atoms/Button';
import Img from '@/utils/Img';
import { splitWordIntoLetters } from '@/utils/functions';

const MeetUs = ({
  data: {
    meetUs_Tag,
    meetUs_Heading,
    meetUs_Paragraph,
    meetUs_Cta,
    meetUs_Projects,
  }
}) => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.column}>
        <header>
          <Tag>{meetUs_Tag}</Tag>
          <Markdown.h2>{meetUs_Heading}</Markdown.h2>
          <Markdown className={styles.paragraph}>{meetUs_Paragraph}</Markdown>
          <Button data={meetUs_Cta} />
        </header>
      </div>
      <ul className={styles.projects}>
        {meetUs_Projects.map(({ title, description, img }, i) => (
          <li key={i}>
            <div className={styles.title}>
              {splitWordIntoLetters(title, styles.letter)}
            </div>
            <Markdown className={styles.description}>{description}</Markdown>
            <Img data={img} className={styles.img} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MeetUs;
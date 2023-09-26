import Tag from '@/components/atoms/Tag';
import styles from './styles.module.scss';
import Markdown from '@/utils/Markdown';
import Button from '@/components/atoms/Button';

const Services = ({
  data: {
    services_Tag,
    services_Heading,
    services_Paragraph,
    services_Cta,
    services_List,
  }
}) => {
  return (
    <section className={styles.wrapper}>
      <Tag>{services_Tag}</Tag>
      <Markdown.h2>{services_Heading}</Markdown.h2>
      <Markdown>{services_Paragraph}</Markdown>
      <Button data={services_Cta} />
    </section>
  );
};

export default Services;
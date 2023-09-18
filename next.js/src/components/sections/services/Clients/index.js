import Tag from '@/components/atoms/Tag';
import styles from './styles.module.scss';
import Markdown from '@/utils/Markdown';
import ClientsShowcase from '@/components/sections/Clients'

const Clients = ({
  data: {
    clients_Tag,
    clients_Heading,
  },
  partners
}) => {
  return (
    <section className={styles.wrapper}>
      <header>
        <Tag>{clients_Tag}</Tag>
        <Markdown.h2>{clients_Heading}</Markdown.h2>
      </header>
      <ClientsShowcase data={partners} />
    </section>
  );
};

export default Clients;
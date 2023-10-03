import styles from './styles.module.scss';
import Img from '@/utils/Img';

const Clients = ({ data }) => {
  return (
    <section className={styles.wrapper}>
      {data.map(({ img, name, href }, i) => (
        <div className={styles.item} key={i}>
          {href ? (
            <a href={href} target='_blank' rel="noopener">
              <Img data={img} aria-label={name} />
            </a>
          ) : (
            <Img data={img} aria-label={name} />
          )}
        </div>
      ))}
    </section>
  );
};

export default Clients;
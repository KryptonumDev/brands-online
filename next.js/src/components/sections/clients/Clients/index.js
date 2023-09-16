'use client';
import Link from 'next/link';
import styles from './styles.module.scss';
import Img from '@/utils/Img';

const Clients = ({ data }) => {
  return (
    <section className={styles.wrapper}>
      {data.map(({ img, name, href }, i) => (
        <div className={styles.item} key={i}>
          {href ? (
            <Link href={href}>
              <Img data={img} aria-label={name} />
            </Link>
          ) : (
            <Img data={img} aria-label={name} />
          )}
        </div>
      ))}
    </section>
  );
};

export default Clients;
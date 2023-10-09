import styles from './styles.module.scss';
import Counter from './Counter';

const Experience = ({
  data: {
    experience_List
  }
}) => {
  return (
    <section className={styles.wrapper}>
      <ul>
        {experience_List.map(({ number, title, description }, i) => (
          <li key={i}>
            <Counter className={styles.number}>{number}</Counter>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
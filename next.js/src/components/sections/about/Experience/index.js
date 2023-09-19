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
            <Counter to={number < 10 ? `0${number}` : number} className={styles.number} />
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
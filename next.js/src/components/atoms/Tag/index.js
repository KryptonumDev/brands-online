import styles from './styles.module.scss';

const Tag = ({ children }) => {
  return (
    <p className={styles.wrapper}>{children}</p>
  );
};

export default Tag;
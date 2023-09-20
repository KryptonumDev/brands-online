import styles from './styles.module.scss';

const InputTag = ({ children, name }) => {
  return (
    <>
      <input
        type="checkbox"
        id={name}
        name={name}
        className={styles.input}
      />
      <label
        htmlFor={name}
        className={styles.label}
      >
        <span>{children}</span>
      </label>
    </>
  );
};

export default InputTag;
import styles from './styles.module.scss';

const InputTag = ({ children, name, ...props }) => {
  return (
    <>
      <input
        type="checkbox"
        id={name}
        name={name}
        className={styles.input}
        {...props}
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
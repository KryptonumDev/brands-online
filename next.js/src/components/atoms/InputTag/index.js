import { GenerateID } from '@/utils/functions';
import styles from './styles.module.scss';

const InputTag = ({ children, name, type='checkbox', ...props }) => {
  const id = GenerateID();
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        className={styles.input}
        {...props}
      />
      <label
        htmlFor={id}
        className={styles.label}
      >
        <span>{children}</span>
      </label>
    </>
  );
};

export default InputTag;
import { GenerateID } from '@/utils/functions';
import styles from './styles.module.scss';

const InputTag = ({ register, errors, children, type='checkbox', ...props }) => {
  const id = GenerateID();
  return (
    <>
      <input
        type={type}
        id={id}
        {...register}
        name={register.name}
        aria-invalid={Boolean(errors[register.name])}
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
import Markdown from '@/utils/Markdown';
import styles from './styles.module.scss';
import Error from '../Error';

const Input = ({ register, label, errors, textarea = false, ...props }) => {
  return (
    <label className={styles.label}>
      <Error error={errors[register.name]} />
      {textarea ? (
        <textarea
          {...register}
          name={register.name}
          aria-invalid={Boolean(errors[register.name])}
          placeholder=' '
          {...props}
        />
      ) : (
        <input
          {...register}
          name={register.name}
          aria-invalid={Boolean(errors[register.name])}
          placeholder=' '
          {...props}
        />
      )}
      <Markdown components={{ 'p': 'span' }}>{label}</Markdown>
    </label>
  );
};

export default Input;
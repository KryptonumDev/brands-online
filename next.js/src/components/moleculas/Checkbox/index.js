import Error from '../Error';
import styles from './styles.module.scss';

const Checkbox = ({ register, label, errors, ...props }) => {
  return (
    <label className={styles.label}>
      <Error error={errors[register.name]} />
      <span className={styles.icon}>
        <input
          {...register}
          name={register.name}
          type="checkbox"
          aria-invalid={Boolean(errors[register.name])}
          {...props}
        />
        <Check />
      </span>
      <span className="label">{label}</span>
    </label>
  );
};

export default Checkbox;

const Check = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none'>
    <path
      fill='url(#paint0_linear_1225_2832)'
      d='M15.584 22.75h-6c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75zm-6-20c-4.61 0-6.25 1.64-6.25 6.25v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25h-6z'
    ></path>
    <path
      className={styles.tick}
      stroke='url(#paint1_linear_1225_2832)'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
      d='M7.587 11.404l3.526 3.813 6.474-7'
    ></path>
    <defs>
      <linearGradient
        id='paint0_linear_1225_2832'
        x1='23.334'
        x2='1.834'
        y1='12'
        y2='12'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#14E5D7'></stop>
        <stop offset='1' stopColor='#00C2B5'></stop>
      </linearGradient>
      <linearGradient
        id='paint1_linear_1225_2832'
        x1='17.587'
        x2='7.587'
        y1='11.717'
        y2='11.717'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#14E5D7'></stop>
        <stop offset='1' stopColor='#00C2B5'></stop>
      </linearGradient>
    </defs>
  </svg>
)
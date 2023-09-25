import styles from './styles.module.scss';

const Error = ({ error }) => (
  error && (
    <p className={styles.error} role="alert">
      <Icon />
      <span>{error.message || `Fill the form properly`}</span>
    </p>
  )
);

export default Error;

const Icon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='none'>
    <path
      fill='#F00000'
      d='M8 15.167A7.173 7.173 0 01.835 8 7.173 7.173 0 018.001.833 7.173 7.173 0 0115.167 8a7.173 7.173 0 01-7.166 7.167zM8 1.833A6.174 6.174 0 001.835 8c0 3.4 2.767 6.167 6.167 6.167S14.167 11.4 14.167 8s-2.766-6.167-6.166-6.167z'
    ></path>
    <path
      fill='#F00000'
      d='M8 9.167a.504.504 0 01-.5-.5V5.334c0-.274.227-.5.5-.5s.5.226.5.5v3.333c0 .273-.227.5-.5.5zm0 2.166a.664.664 0 01-.253-.053.769.769 0 01-.22-.14.688.688 0 01-.14-.22.664.664 0 01-.053-.253c0-.087.02-.174.053-.254a.77.77 0 01.14-.22.771.771 0 01.22-.14.667.667 0 01.507 0 .79.79 0 01.22.14.77.77 0 01.14.22c.033.08.053.167.053.254a.67.67 0 01-.053.253.688.688 0 01-.14.22.769.769 0 01-.22.14.664.664 0 01-.253.053z'
    ></path>
  </svg>
)
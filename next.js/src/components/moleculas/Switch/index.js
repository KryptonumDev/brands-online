import styles from './styles.module.scss';

const Switch = ({
  hasLabel=true,
  ...props
}) => {
  const Wrapper = hasLabel ? 'label' : 'div';
  return (
    <Wrapper className={styles.toggle}>
      <input
        type='checkbox'
        {...props}
      />
      <div className={styles.dot}>
        <Tick className={styles.tick} />
      </div>
    </Wrapper>
  );
};

export default Switch;

const Tick = ({ ...props }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 17' fill='none' {...props}>
    <path
      stroke='url(#switch-gradient)'
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M14 3.7l-8.4 9.6L2 9.7'
    ></path>
    <defs>
      <linearGradient
        id='switch-gradient'
        x1='14'
        x2='2'
        y1='8.5'
        y2='8.5'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#14E5D7'></stop>
        <stop offset='1' stopColor='#00C2B5'></stop>
      </linearGradient>
    </defs>
  </svg>
)
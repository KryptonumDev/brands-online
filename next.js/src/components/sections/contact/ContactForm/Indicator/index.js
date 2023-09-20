import styles from './styles.module.scss';

const Indicator = ({ step, setStep, maxSteps }) => {
  return (
    <div className={styles.wrapper}>
      <button className={styles.backBtn} onClick={() => setStep(0)}>
        <Arrow />
        <span>Previous step</span>
      </button>
      <p>{step} / {maxSteps}</p>
      <div className={styles.progressbar} role="progressbar">
        <div className={styles.bar} style={{ transform: `scaleX(${step/maxSteps})` }}></div>
      </div>
    </div>
  );
};

export default Indicator;

const Arrow = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='23' height='20' fill='none'>
    <path
      fill='url(#paint0_linear_731_6867)'
      d='M22.75 14.013V5.72H9.898V.103L0 10l9.898 9.898v-5.885H22.75z'
    ></path>
    <defs>
      <linearGradient
        id='paint0_linear_731_6867'
        x1='22.75'
        x2='0'
        y1='10'
        y2='10'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#14E5D7'></stop>
        <stop offset='1' stopColor='#00C2B5'></stop>
      </linearGradient>
    </defs>
  </svg>
)
'use client'
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

const Indicator = ({ step, maxSteps, ...props }) => {
  return (
    <motion.div
      className={styles.wrapper}
      {...props}
    >
      <p>{step} / {maxSteps}</p>
      <div className={styles.progressbar} role="progressbar">
        <div className={styles.bar} style={{ transform: `scaleX(${step/maxSteps})` }}></div>
      </div>
    </motion.div>
  );
};

export default Indicator;
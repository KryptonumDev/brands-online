import Loader from '@/components/atoms/Loader';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';

const Sending = ({ ...props }) => {
  return (
    <motion.div
      className={styles.wrapper}
      {...props}
    >
      <Loader />
    </motion.div>
  );
};

export default Sending;
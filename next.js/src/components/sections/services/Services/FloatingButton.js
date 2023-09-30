import Button from '@/components/atoms/Button';
import styles from './styles.module.scss';
import { useInView } from 'framer-motion';

const FloatingButton = ({ cta, wrapper }) => {
  const isInView = useInView(wrapper, {
    margin: "-50% 0px -50% 0px"
  });
  
  return (
    <Button
      data={cta}
      className={`${styles.button} ${isInView ? styles.visible : ''}`}
    />
  );
};

export default FloatingButton;
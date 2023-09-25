import Markdown from '@/utils/Markdown';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import Button from '@/components/atoms/Button';

const Status = ({
  type,
  heading,
  paragraph,
  cta,
  setStatus='',
  ...props
}) => {
  return (
    <motion.section
      className={styles.wrapper}
      {...props}
    >
      <Markdown.h2>{heading}</Markdown.h2>
      <Markdown className={styles.paragraph}>{paragraph}</Markdown>
      {type === 'success' ? (
        <Button data={cta} />
      ) : (
        <Button onClick={() => setStatus({sending: false})}>{cta}</Button>
      )}
    </motion.section>
  );
};

Status.Success = (props) => <Status type="success" {...props} />;
Status.Success.displayName = `StatusSuccess`;
Status.Error = (props) => <Status type="error" {...props} />;
Status.Error.displayName = `StatusError`;


export default Status;
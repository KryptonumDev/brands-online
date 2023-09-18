import styles from './styles.module.scss';

const Tag = ({ children, className }) => {
  const combinedClassName = `${styles.wrapper}${className ? ` ${className}` : ''}`;
  return <p className={combinedClassName}>{children}</p>;
};

export default Tag;

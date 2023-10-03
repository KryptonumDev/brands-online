import styles from './styles.module.scss';

const RenderPlaceholder = ({ count=16, loading=true, className }) => {
  return (
    <div
      className={`${styles.wrapper} ${loading ? styles.loading : ''} ${className || ''}`}
      aria-hidden={true}
    >
      {Array.from({ length: count }, (_, i) => (
        <div key={i} style={{ animationDelay: `${i * .03}s`}} />
      ))}
    </div>
  );
};

export default RenderPlaceholder;
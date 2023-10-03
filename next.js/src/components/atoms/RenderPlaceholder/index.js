import styles from './styles.module.scss';

const RenderPlaceholder = ({ size='small', loading=true, className }) => {
  const items = size === 'large' ? 32 : 16;
  return (
    <div
      className={`${styles.wrapper} ${loading ? styles.loading : ''} ${className || ''} ${size === 'large' && styles.large}`}
      aria-hidden={true}
    >
      {Array.from({ length: items }, (_, i) => (
        <div key={i} style={{ animationDelay: `${i * .03}s`}} />
      ))}
    </div>
  );
};

export default RenderPlaceholder;
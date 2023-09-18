import styles from './styles.module.scss';

const Tag = ({ children, className }) => {
  const combinedClassName = `${styles.wrapper}${className ? ` ${className}` : ''}`;
  return (
    <p className={combinedClassName}>
      <span>
        {children}
      </span>
      <Decoration />
    </p>
  );
};

export default Tag;

const Decoration = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='26' height='23' fill='none'>
    <path
      stroke='#D2FB67'
      fill='var(--neutral-100)'
      d='M1.25 9.5v1.244a1.385 1.385 0 102.77 0V5.13a4 4 0 014-4h13.23a4 4 0 014 4v12.5a4 4 0 01-4 4H6.27a2.25 2.25 0 01-2.25-2.25v-.866a1.385 1.385 0 00-2.77 0v1.018'
    ></path>
  </svg>
)
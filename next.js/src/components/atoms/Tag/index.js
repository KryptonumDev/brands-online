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
  <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' fill='none'>
    <path
      stroke='#D2FB67'
      fill='var(--neutral-100)'
      d='M.516 11.016v.861a1.252 1.252 0 102.504 0V5.13a4 4 0 014-4h13.23a4 4 0 014 4v13.5a4 4 0 01-4 4H5.27a2.25 2.25 0 01-2.25-2.25v-.998a1.252 1.252 0 10-2.504 0v.635'
    ></path>
  </svg>
)
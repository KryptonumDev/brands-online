import styles from './styles.module.scss';
import Link from 'next/link';

const Button = ({ data, theme = 'primary', variant="normal", children, href, className, ...props }) => {
  if (data) {
    theme = data.theme;
    href = data.href;
    children = data.text;
  }
  const isExternal = href?.startsWith('https://');

  const commonProps = {
    className: `cta${className ? ` ${className}` : ''}`,
    "data-theme": theme,
    "data-variant": variant,
    ...props,
  };

  return (
    href ? (
      isExternal
        ? (
          <div className={styles.wrapper}>
            <a href={href} target="_blank" rel="noreferrer" {...commonProps}>
              <span>
                {children}
              </span>
              {theme === 'primary' && (
                <>
                  <Icon.connector />
                  <Icon.arrow />
                  <Gooey />
                </>
              )}
            </a>
          </div>
        ) : (
          <div className={styles.wrapper}>
            <Link href={href} {...commonProps}>
              <span>
                {children}
              </span>
              {theme === 'primary' && (
                <>
                  <Icon.connector />
                  <Icon.arrow />
                  <Gooey />
                </>
              )}
            </Link>
          </div>
        )
    ) : (
      <div className={styles.wrapper}>
        <button {...commonProps}>
          <span>
            {children}
          </span>
          {theme === 'primary' && (
            <>
              <Icon.connector />
              <Icon.arrow />
              <Gooey />
            </>
          )}
        </button>
      </div>
    )
  )
};

const Icon = {
  "connector": () => (
    <svg xmlns='http://www.w3.org/2000/svg' width='10' height='27' fill='none' className={styles.connector}>
      <path
        fill='#14E5D7'
        d='M.125 26.454V.312c.719 9.844 7.344 8.583 9 3.907v17.625c-4.485-6.479-8.985.032-9 4.61v.046-.046z'
      ></path>
    </svg>
  ),
  "arrow": () => (
    <svg xmlns='http://www.w3.org/2000/svg' width='51' height='53' fill='none' className={styles.arrow}>
      <rect width='51' height='52' y='0.566' fill='#14E5D7' rx='25.5'></rect>
      <path
        fill='url(#button-arrow)'
        d='M15.125 22.554v8.292h12.852v5.618l9.898-9.898-9.898-9.897v5.885H15.125z'
      ></path>
      <defs>
        <linearGradient
          id='button-arrow'
          x1='30'
          x2='23.022'
          y1='21.687'
          y2='38.508'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#CFFA5B'></stop>
          <stop offset='0.922' stopColor='#EAFFAF'></stop>
          <stop offset='1' stopColor='#EBFFB6'></stop>
        </linearGradient>
      </defs>
    </svg>
  )
}
const Gooey = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    style={{ position: "absolute" }}
    width='0'
    height='0'
    visibility='hidden'
  >
    <defs>
      <filter id='goo'>
        <feGaussianBlur
          in='SourceGraphic'
          result='blur'
          stdDeviation='10'
        ></feGaussianBlur>
        <feColorMatrix
          in='blur'
          result='goo'
          values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 19 -9'
        ></feColorMatrix>
        <feComposite
          in='SourceGraphic'
          in2='goo'
          operator='atop'
        ></feComposite>
      </filter>
    </defs>
  </svg>
)

export default Button;
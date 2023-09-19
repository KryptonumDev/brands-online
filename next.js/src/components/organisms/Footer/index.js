import styles from './styles.module.scss';
import { Logo } from '@/components/atoms/Icons';
import Button from '@/components/atoms/Button';
import Link from 'next/link';
import CustomLink from '@/components/atoms/CustomLink';
import fetchData from '@/utils/fetchData';

const Footer = async () => {
  const { global: {
    instagram,
    facebook,
    youtube,
  }} = await getData();

  const socials = [
    {
      name: 'Instagram',
      icon: <Instagram />,
      url: instagram
    },
    {
      name: 'Facebook',
      icon: <Facebook />,
      url: facebook
    },
    {
      name: 'YouTube',
      icon: <Youtube />,
      url: youtube
    }
  ]

  return (
    <footer className={styles.wrapper}>
      <div className="max-width">
        <div className={styles.collaborate}>
          <p>Want to collaborate with us?</p>
          <Button href="/contact">Let’s talk</Button>
        </div>
        <div className={styles.brandColumn}>
          <div className={styles.brand}>
            <Link href="/" aria-label="Homepage">
              <Logo viewBox={true} />
            </Link>
            <p>Our mission is helping brands go online. Our mission is helping brands go online. Our mission is helping brands go online.</p>
          </div>
          <div className={styles.socials}>
            <p>Social media</p>
            <ul>
              {socials.map((item, i) => (
                item.url && (
                  <li key={i}>
                    <CustomLink href={item.url} aria-label={item.name}>
                      {item.icon}
                    </CustomLink>
                  </li>
                )
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.copy}>
          <p><span>Ⓒ</span> 2023 <CustomLink href="https://kryptonum.eu/pl">Kryptonum</CustomLink></p>
          <CustomLink href='/privacy-policy'>Privacy policy</CustomLink>
        </div>
      </div>
    </footer>
  );
};

const Instagram = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='33' height='33' fill='none'>
    <path
      fill='url(#instagram-1)'
      fillRule='evenodd'
      d='M28.835 16.39c0-5 0-7.5-1.273-9.252a6.666 6.666 0 00-1.475-1.475C24.335 4.39 21.835 4.39 16.835 4.39c-5 0-7.499 0-9.251 1.273a6.667 6.667 0 00-1.475 1.475C4.835 8.89 4.835 11.39 4.835 16.39c0 5 0 7.5 1.274 9.252a6.666 6.666 0 001.475 1.475c1.752 1.273 4.252 1.273 9.251 1.273 5 0 7.5 0 9.252-1.273a6.665 6.665 0 001.475-1.475c1.273-1.753 1.273-4.252 1.273-9.252zm-2.666 0c0-4.4 0-6.6-1.367-7.967-1.367-1.366-3.567-1.366-7.967-1.366-4.4 0-6.6 0-7.966 1.366C7.502 9.79 7.502 11.99 7.502 16.39c0 4.4 0 6.6 1.367 7.966 1.367 1.367 3.567 1.367 7.966 1.367 4.4 0 6.6 0 7.967-1.367 1.367-1.366 1.367-3.566 1.367-7.966z'
      clipRule='evenodd'
    ></path>
    <path
      fill='url(#instagram-2)'
      fillRule='evenodd'
      d='M16.835 25.723c-4.4 0-6.6 0-7.966-1.367-1.367-1.366-1.367-3.566-1.367-7.966s0-6.6 1.367-7.967c1.367-1.366 3.567-1.366 7.966-1.366 4.4 0 6.6 0 7.967 1.366 1.367 1.367 1.367 3.567 1.367 7.967 0 4.4 0 6.6-1.367 7.966-1.367 1.367-3.567 1.367-7.967 1.367zm0-4a5.333 5.333 0 100-10.666 5.333 5.333 0 000 10.666zm5.667-9.333a1.667 1.667 0 100-3.333 1.667 1.667 0 000 3.333z'
      clipRule='evenodd'
    ></path>
    <path
      fill='url(#c)'
      d='M19.502 16.39a2.667 2.667 0 11-5.333 0 2.667 2.667 0 015.333 0z'
    ></path>
    <defs>
      <linearGradient
        id='instagram-1'
        x1='13.143'
        x2='22.429'
        y1='22.305'
        y2='2.829'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#CFFA5B'></stop>
        <stop offset='0.922' stopColor='#EAFFAF'></stop>
        <stop offset='1' stopColor='#EBFFB6'></stop>
      </linearGradient>
      <linearGradient
        id='instagram-2'
        x1='13.143'
        x2='22.429'
        y1='22.305'
        y2='2.829'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#CFFA5B'></stop>
        <stop offset='0.922' stopColor='#EAFFAF'></stop>
        <stop offset='1' stopColor='#EBFFB6'></stop>
      </linearGradient>
      <linearGradient
        id='c'
        x1='13.143'
        x2='22.429'
        y1='22.305'
        y2='2.829'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#CFFA5B'></stop>
        <stop offset='0.922' stopColor='#EAFFAF'></stop>
        <stop offset='1' stopColor='#EBFFB6'></stop>
      </linearGradient>
    </defs>
  </svg>
)

const Facebook = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='33' height='33' fill='none'>
    <path
      fill='url(#paint0_linear_863_4575)'
      d='M17.335 4.515c-6.834 0-12.375 5.54-12.375 12.375 0 5.642 3.776 10.402 8.938 11.891v-6.116c0-.13 0-.195-.04-.235-.04-.04-.105-.04-.235-.04h-1.925c-.26 0-.389 0-.47-.08-.08-.081-.08-.21-.08-.47v-4.4c0-.26 0-.389.08-.47.081-.08.21-.08.47-.08h1.754c.16 0 .24 0 .3-.032a.275.275 0 00.114-.114c.032-.06.032-.14.032-.3 0-2.793 0-4.19.562-5.249a4.812 4.812 0 011.993-1.993c1.059-.562 2.456-.562 5.249-.562h1.3c.231 0 .346 0 .423.065.012.01.023.02.033.033.065.076.065.192.065.422v4.43c0 .26 0 .389-.08.47-.081.08-.21.08-.47.08h-2.2c-.648 0-.972 0-1.174.201-.201.202-.201.526-.201 1.174v1.1c0 .13 0 .194.04.235.04.04.105.04.235.04h3.3c.26 0 .389 0 .47.08.08.081.08.21.08.47v4.4c0 .26 0 .389-.08.47-.081.08-.21.08-.47.08h-3.3c-.13 0-.194 0-.235.04-.04.04-.04.105-.04.235v6.429c5.853-.982 10.312-6.072 10.312-12.204 0-6.835-5.54-12.375-12.375-12.375z'
    ></path>
    <path
      fill='url(#paint1_linear_863_4575)'
      fillRule='evenodd'
      d='M31.085 16.89c0 6.893-5.072 12.601-11.687 13.596v-1.392c5.853-.982 10.312-6.072 10.312-12.204 0-6.835-5.54-12.375-12.375-12.375-6.834 0-12.375 5.54-12.375 12.375 0 5.642 3.776 10.402 8.938 11.891v1.426C7.968 28.68 3.585 23.297 3.585 16.89c0-7.594 6.157-13.75 13.75-13.75 7.594 0 13.75 6.156 13.75 13.75z'
      clipRule='evenodd'
    ></path>
    <path
      fill='url(#paint2_linear_863_4575)'
      d='M18.023 30.623v-1.377c-.92.05-1.86-.003-2.75-.152v1.392c.894.135 1.83.182 2.75.137z'
    ></path>
    <path
      fill='url(#paint3_linear_863_4575)'
      d='M22.148 20.74v-2.2c0-.13 0-.195-.04-.235-.04-.04-.105-.04-.235-.04h-3.3c-.26 0-.389 0-.47-.08-.08-.081-.08-.21-.08-.47v-2.2c0-1.296 0-1.945.403-2.347.402-.403 1.05-.403 2.347-.403h1.1c.13 0 .194 0 .235-.04.04-.04.04-.105.04-.235v-2.21c0-.12 0-.18-.035-.219a.13.13 0 00-.011-.011c-.04-.035-.1-.035-.218-.035-2.985 0-4.477 0-5.453.864-.104.092-.202.19-.294.294-.864.976-.864 2.468-.864 5.452v1.09c0 .26 0 .389-.08.47-.081.08-.21.08-.47.08h-1.925c-.13 0-.194 0-.235.04-.04.04-.04.105-.04.235v2.2c0 .13 0 .194.04.235.04.04.105.04.235.04h1.925c.26 0 .389 0 .47.08.08.081.08.21.08.47v7.529c.89.15 1.83.203 2.75.152v-7.681c0-.26 0-.389.08-.47.081-.08.21-.08.47-.08h3.3c.13 0 .194 0 .235-.04.04-.04.04-.106.04-.235z'
    ></path>
    <defs>
      <linearGradient
        id='paint0_linear_863_4575'
        x1='13.105'
        x2='23.745'
        y1='23.668'
        y2='1.351'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#CFFA5B'></stop>
        <stop offset='0.922' stopColor='#EAFFAF'></stop>
        <stop offset='1' stopColor='#EBFFB6'></stop>
      </linearGradient>
      <linearGradient
        id='paint1_linear_863_4575'
        x1='13.105'
        x2='23.745'
        y1='23.668'
        y2='1.351'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#CFFA5B'></stop>
        <stop offset='0.922' stopColor='#EAFFAF'></stop>
        <stop offset='1' stopColor='#EBFFB6'></stop>
      </linearGradient>
      <linearGradient
        id='paint2_linear_863_4575'
        x1='13.105'
        x2='23.745'
        y1='23.668'
        y2='1.351'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#CFFA5B'></stop>
        <stop offset='0.922' stopColor='#EAFFAF'></stop>
        <stop offset='1' stopColor='#EBFFB6'></stop>
      </linearGradient>
      <linearGradient
        id='paint3_linear_863_4575'
        x1='13.105'
        x2='23.745'
        y1='23.668'
        y2='1.351'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#CFFA5B'></stop>
        <stop offset='0.922' stopColor='#EAFFAF'></stop>
        <stop offset='1' stopColor='#EBFFB6'></stop>
      </linearGradient>
    </defs>
  </svg>
)

const Youtube = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='33' height='33' fill='none'>
    <path
      fill='url(#paint0_linear_863_4577)'
      fillRule='evenodd'
      d='M4.713 8.762c-1.211 1.386-1.211 3.5-1.211 7.725 0 4.227 0 6.34 1.21 7.726.139.158.287.307.445.447 1.377 1.218 3.478 1.218 7.678 1.218h8c4.2 0 6.301 0 7.679-1.218.157-.14.306-.289.444-.447 1.21-1.387 1.21-3.5 1.21-7.726s0-6.339-1.21-7.725a4.883 4.883 0 00-.444-.447c-1.378-1.218-3.478-1.218-7.679-1.218h-8c-4.2 0-6.3 0-7.678 1.218-.158.14-.306.288-.444.447zm16.389-.323h-8.533c-3.646 0-5.469 0-6.601 1.139-1.133 1.14-1.133 2.973-1.133 6.641v.537c0 3.667 0 5.501 1.133 6.64 1.132 1.14 2.955 1.14 6.6 1.14h8.534c3.645 0 5.468 0 6.6-1.14 1.133-1.139 1.133-2.973 1.133-6.64v-.537c0-3.668 0-5.502-1.132-6.641-1.133-1.14-2.956-1.14-6.601-1.14z'
      clipRule='evenodd'
    ></path>
    <path
      fill='url(#paint1_linear_863_4577)'
      fillRule='evenodd'
      d='M20.734 15.314c.915.511.915 1.835 0 2.346l-5.53 3.088c-.89.496-1.98-.15-1.98-1.173V13.4c0-1.023 1.09-1.67 1.98-1.173l5.53 3.087zm-5.784 4.012a.267.267 0 01-.393-.236v-5.205c0-.203.215-.333.393-.236l4.785 2.602a.269.269 0 010 .472l-4.785 2.603z'
      clipRule='evenodd'
    ></path>
    <path
      fill='url(#paint2_linear_863_4577)'
      fillRule='evenodd'
      d='M12.569 8.439h8.533c3.645 0 5.468 0 6.6 1.139 1.133 1.14 1.133 2.973 1.133 6.641v.537c0 3.667 0 5.501-1.132 6.64-1.133 1.14-2.956 1.14-6.601 1.14h-8.533c-3.646 0-5.469 0-6.601-1.14-1.133-1.139-1.133-2.973-1.133-6.64v-.537c0-3.668 0-5.502 1.133-6.641 1.132-1.14 2.955-1.14 6.6-1.14zm.654 4.96v6.176c0 1.022 1.092 1.669 1.98 1.173l5.531-3.088c.915-.51.915-1.835 0-2.346l-5.53-3.087c-.89-.496-1.98.15-1.98 1.173z'
      clipRule='evenodd'
    ></path>
    <defs>
      <linearGradient
        id='paint0_linear_863_4577'
        x1='12.733'
        x2='18.377'
        y1='21.116'
        y2='4.306'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#CFFA5B'></stop>
        <stop offset='0.922' stopColor='#EAFFAF'></stop>
        <stop offset='1' stopColor='#EBFFB6'></stop>
      </linearGradient>
      <linearGradient
        id='paint1_linear_863_4577'
        x1='12.733'
        x2='18.377'
        y1='21.116'
        y2='4.306'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#CFFA5B'></stop>
        <stop offset='0.922' stopColor='#EAFFAF'></stop>
        <stop offset='1' stopColor='#EBFFB6'></stop>
      </linearGradient>
      <linearGradient
        id='paint2_linear_863_4577'
        x1='12.733'
        x2='18.377'
        y1='21.116'
        y2='4.306'
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#CFFA5B'></stop>
        <stop offset='0.922' stopColor='#EAFFAF'></stop>
        <stop offset='1' stopColor='#EBFFB6'></stop>
      </linearGradient>
    </defs>
  </svg>
)

const getData = async () => {
  const { body: { data } } = await fetchData(`
    global: Global(id: "global") {
      instagram
      facebook
      youtube
    }
  `)
  return data;
}

export default Footer;
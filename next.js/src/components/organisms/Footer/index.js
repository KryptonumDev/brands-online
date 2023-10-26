import styles from './styles.module.scss';
import Button from '@/components/atoms/Button';
import Link from 'next/link';
import CustomLink from '@/components/atoms/CustomLink';
import fetchData from '@/utils/fetchData';
import Markdown from '@/utils/Markdown';
import Img from '@/utils/Img';

const Footer = async () => {
  const { global: {
    footer_Logo,
    footer_Heading,
    footer_Cta,
    footer_Slogan,
  }} = await getData();

  return (
    <footer className={styles.wrapper}>
      <div className="max-width">
        <div className={styles.column}>
          <div className={styles.collaborate}>
            <p>{footer_Heading}</p>
            <Button data={footer_Cta} variant='secondary' />
          </div>
          <div className={styles.brand}>
            <Link href="/" aria-label="Homepage">
              <Img data={footer_Logo} placeholder="empty" />
            </Link>
            <Markdown>{footer_Slogan}</Markdown>
          </div>
        </div>
        <div className={styles.copy}>
          <p><span>Ⓒ</span> {new Date().getFullYear()}</p>
          <CustomLink href='/privacy-policy'>Privacy policy</CustomLink>
        </div>
      </div>
    </footer>
  );
};

const getData = async () => {
  const { body: { data } } = await fetchData(`
    global: Global(id: "global") {
      instagram
      facebook
      youtube
      footer_Logo {
        asset {
          altText
          url
          metadata {
            lqip
            dimensions {
              width
              height
            }
          }
        }
      }
      footer_Heading
      footer_Cta {
        theme
        text
        href
      }
      footer_Slogan
    }
  `)
  return data;
}

export default Footer;
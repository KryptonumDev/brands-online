import Link from 'next/link';
import styles from './styles.module.scss';
import { Logo } from '@/components/atoms/Icons';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <Link href="/" aria-label="Homepage">
        <Logo />
      </Link>
    </footer>
  );
};

export default Footer;
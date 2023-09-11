import Link from 'next/link';
import styles from './styles.module.scss';
import { Logo } from '@/components/atoms/Icons';

const Nav = () => {
  return (
    <nav className={styles.wrapper}>
      <div className="max-width">
        <Link href='/' aria-label='Strona główna'>
          <Logo />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
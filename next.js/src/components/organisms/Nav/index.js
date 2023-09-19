'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { Logo } from '@/components/atoms/Icons';
import Button from '@/components/atoms/Button';
import { motion } from 'framer-motion';
import { easing } from '@/global/constants';
import { splitWordIntoLetters } from '@/utils/functions';

const links = [
  {
    name: 'About',
    href: '/about',
    asButton: false,
  },
  {
    name: 'Services',
    href: '/services',
    asButton: false,
  },
  {
    name: 'Clients',
    href: '/clients',
    asButton: false,
  },
  {
    name: 'Contact',
    href: '/contact',
    asButton: true,
  },
]

const Nav = () => {
  const [ navOpened, setNavOpened ] = useState(false);
  return (
    <>
      <a href="#main" className={styles.skipToMainContent}>Skip to main content</a>
      <header className={styles.wrapper} aria-expanded={navOpened}>
        <div className="max-width">
          <Link
            href='/'
            aria-label='Strona główna'
            className={styles.logo}
            onClick={() => setNavOpened(false)}
          >
            <Logo />
          </Link>
          <nav className={styles.nav}>
            <ul>
              {links.map(({ name, href, asButton }, i) => (
                <li key={i} className={!asButton ? styles.animatedItem : ''}>
                  {!asButton ? (
                      <Link href={href}>
                        {splitWordIntoLetters(name, styles.letter)}
                      </Link>
                  ) : (
                    <Button
                      theme='secondary'
                      href={href}
                      onClick={() => setNavOpened(false)}
                    >{name}</Button>
                  )}
                </li>
              ))}
              <li className={styles.navToggle}>
                <button
                  onClick={() => setNavOpened(!navOpened)}
                  aria-label={`${navOpened ? 'Hide' : 'Show' } navigation`}
                ><span></span><span></span></button>
              </li>
            </ul>
          </nav>
          <motion.nav
            className={styles.mobileNav}
            initial={{ height: 0 }}
            animate={{ height: navOpened ? 'auto' : 0 }}
            transition={{ duration: .8, ease: easing }}
          >
            <ul>
              {links.map(({ name, href, asButton }, i) => (
                !asButton && (
                  <li key={i} className={styles.animatedItem}>
                    <Link href={href} onClick={() => setNavOpened(false)}>
                      {splitWordIntoLetters(name, styles.letter)}
                    </Link>
                  </li>
                )
              ))}
            </ul>
          </motion.nav>
          <div className={styles.overlay} aria-hidden="true" onClick={() => setNavOpened(false)}></div>
        </div>
      </header>
    </>
  );
}

export default Nav;
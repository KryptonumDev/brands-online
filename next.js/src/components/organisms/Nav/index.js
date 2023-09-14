'use client';
import { useState } from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import { Logo } from '@/components/atoms/Icons';
import Button from '@/components/atoms/Button';
import { motion } from 'framer-motion';

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

const splitWordIntoLetters = (word) => (
  Array.from({ length: 2 }, (_, i) => (
    <div key={i} aria-hidden={i === 1}>
      {word.split('').map((letter, letterIndex) => (
        <span key={letterIndex} className={styles.letter}>
          {letter}
        </span>
      ))}
    </div>
  ))
);

const Nav = () => {
  const [ navOpened, setNavOpened ] = useState(false);
  return (
    <>
      <a href="#main" className={styles.skipToMainContent}>Skip to main content</a>
      <header className={styles.wrapper} aria-expanded={navOpened}>
        <div className="max-width">
          <Link href='/' aria-label='Strona główna' className={styles.logo}>
            <Logo />
          </Link>
          <nav className={styles.nav}>
            <ul>
              {links.map(({ name, href, asButton }, i) => (
                <li key={i} className={!asButton ? styles.animatedItem : ''}>
                  {!asButton ? (
                      <Link href={href}>
                        {splitWordIntoLetters(name)}
                      </Link>
                  ) : (
                    <Button theme='secondary' href={href}>{name}</Button>
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
            transition={{ duration: .8, ease: [ 0.65, 0, 0.05, 1 ] }}
          >
            <ul>
              {links.map(({ name, href, asButton }, i) => (
                !asButton && (
                  <li key={i} className={styles.animatedItem}>
                    <Link href={href} onClick={() => setNavOpened(false)}>
                      {splitWordIntoLetters(name)}
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
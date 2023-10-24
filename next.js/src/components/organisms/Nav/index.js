'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';
import { Logo } from '@/components/atoms/Icons';
import Button from '@/components/atoms/Button';
import { motion } from 'framer-motion';
import { easing } from '@/global/constants';

const splitWordIntoLetters = (word, className = null) => (
  Array.from({ length: 2 }, (_, i) => (
    <div key={i} aria-hidden={i === 1}>
      {word.split('').map((letter, letterIndex) => (
        letter === ' ' ? ' ' : (
          <span key={letterIndex} className={className || ''}>
            {letter}
          </span>
        )
      ))}
    </div>
  ))
);

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
  const pathname = usePathname();
  const [ navOpened, setNavOpened ] = useState(false);
  const logo = useRef(null);

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKey);
    window.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      window.removeEventListener('scroll', handleScroll);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleEscapeKey = (e) => {
    if (e.key === "Escape") {
      setNavOpened(false);
    }
  }

  let prevScrollPos = 0;
  let scrollDistance = 0;
  const offset = 50;

  useEffect(() => {
    if(navOpened) {
      logo.current.setAttribute('data-hide', false);
    }
  }, [navOpened])

  const handleScroll = () => {
    const { scrollY } = window;

    const headerExpanded = logo.current.closest('header').getAttribute('aria-expanded') == 'true';
    if (!headerExpanded) {
      if (scrollY < prevScrollPos) {
        scrollDistance += prevScrollPos - scrollY;
        if (scrollDistance >= offset) {
          logo.current.setAttribute('data-hide', false);
          scrollDistance = 0;
        }
      } else {
        logo.current.setAttribute('data-hide', true);
        scrollDistance = 0;
      }
      prevScrollPos = scrollY;
      if (scrollY <= offset) {
        logo.current.setAttribute('data-hide', false);
      }
    } else {
      logo.current.setAttribute('data-hide', false);
    }
  };
  
  return (
    <>
      <a href="#main" className={styles.skipToMainContent}>Skip to main content</a>
      <header className={`${styles.wrapper} blobEffectStack`} aria-expanded={navOpened}>
        <div className="max-width">
          <Link
            href='/'
            aria-label='Strona główna'
            className={styles.logo}
            onClick={() => setNavOpened(false)}
            ref={logo}
          >
            <Logo />
          </Link>
          <nav className={styles.nav}>
            <ul>
              {links.map(({ name, href, asButton }, i) => (
                <li key={i} className={!asButton ? styles.animatedItem : ''}>
                  {!asButton ? (
                      <Link href={href} aria-current={pathname === href ? 'page' : false}>
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
                    <Link
                      href={href}
                      onClick={() => setNavOpened(false)}
                      aria-current={pathname === href ? 'page' : false}
                    >
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
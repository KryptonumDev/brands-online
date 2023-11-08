'use client'
import React, { useEffect, useState } from "react"
import styles from './styles.module.scss'
import { Logo } from "@/components/atoms/Icons"
import { motion } from 'framer-motion';

const SplashScreen = () => {
  const [ loaded, setLoaded ] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <aside className={styles.wrapper} aria-hidden={loaded}>
      <motion.div
        initial={{ width: 'auto', transform: 'scale(1)' }}
        animate={{ width: loaded ? '32px' : 'auto', transform: loaded ? 'scale(2)' : 'scale(1)' }}
        exit={{ width: '32px', transform: 'scale(2)' }}
        transition={{
          width: { duration: 0.5 },
          transform: { delay: 0.5 },
        }}
      >
        <Logo viewBox={true} />
      </motion.div>
    </aside>
  )
}

export default SplashScreen;
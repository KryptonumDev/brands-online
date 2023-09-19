import { useEffect, useRef } from 'react';
import Img from '@/utils/Img';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { easing } from '@/global/constants';

const Modal = ({ data, modal, ...props }) => {
  const modalContainer = useRef(null);
  const scaleAnimation = {
    initial: {
      scale: 0,
      x: "-50%",
      y: "-50%"
    },
    enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: .4, ease: easing }
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: .4, ease: easing }
    }
  }
  useEffect(() => {
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", { duration: 0.6, ease: "power3" })
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", { duration: 0.6, ease: "power3" })
    window.addEventListener('mousemove', ({ pageX, pageY }) => {
      xMoveContainer(pageX)
      yMoveContainer(pageY)
    })
  }, [])

  return (
    <motion.div
      className={styles.modalContainer}
      {...props}
      ref={modalContainer}
      variants={scaleAnimation}
      initial="initial"
      animate={modal.active ? "enter" : "closed"}
    >
      <div
        className={styles.modalSlider}
        style={{ transform: `translateY(${modal.index * -100}%)`}}
      >
        {data.map((item, i) => (
          <Img data={item} key={i} className={styles.item} />
        ))}
      </div>
    </motion.div>
  );
};

export default Modal;
'use client';
import { useEffect, useRef, useState } from 'react';
import NextLink from 'next/link';
import styles from './styles.module.scss';
import gsap from 'gsap';

const CustomLink = ({ href, children, ...props }) => {
  const [ scale, setScale ] = useState(0);
  const linkRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    let xMoveContainer = gsap.quickTo(iconRef.current, "x", { duration: 0.6, ease: "expo" })
    let yMoveContainer = gsap.quickTo(iconRef.current, "y", { duration: 0.6, ease: "expo" })

    linkRef.current.addEventListener('mousemove', (e) => {
      const offsetX = e.clientX - e.target.getBoundingClientRect().left;
      const offsetY = e.clientY - e.target.getBoundingClientRect().top;
      xMoveContainer(offsetX)
      yMoveContainer(offsetY)
    })
    
    gsap.to(iconRef.current, {
      scale: scale,
      duration: 0.4,
      ease: 'expo',
    });
  }, [scale])

  const isExternal = href && (href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:'));
  const IconComponent = isExternal ? Icon.external : Icon.internal;
  const LinkComponent = isExternal ? 'a' : NextLink;
  return (
    <LinkComponent
      {...props}
      {...(isExternal && {
        target: '_blank',
        rel: 'noreferrer'
      })}
      href={href}
      className={`${styles.wrapper} CustomLink`}
      ref={linkRef}
      onMouseOver={() => setScale(1)}
      onMouseOut={() => setScale(0)}
      onMouseDown={() => setScale(1.5)}
      onMouseUp={() => setScale(1)}
    >
      <span>
        {children}
      </span>
      <IconComponent
        innerRef={iconRef}
      />
    </LinkComponent>
  );
};

const Icon = {
  "internal": ({ innerRef, ...props }) => (
    <svg xmlns='http://www.w3.org/2000/svg' width='35' height='34' fill='none' {...props} ref={innerRef}>
      <rect
        width='28'
        height='28'
        x='0.602'
        y='6.386'
        fill='url(#paint0_linear_771_9444)'
        rx='14'
        transform='rotate(-13.184 .602 6.386)'
      ></rect>
      <path
        fill='#222'
        d='M16.099 20.473a3.256 3.256 0 01-3.906-2.423 3.256 3.256 0 012.423-3.905c.2-.047.404.08.45.28a.377.377 0 01-.279.45 2.501 2.501 0 001.14 4.868 2.5 2.5 0 001.864-3.004.378.378 0 01.28-.451c.2-.047.404.08.45.28a3.256 3.256 0 01-2.422 3.905z'
      ></path>
      <path
        fill='#222'
        d='M20.142 19.654a.378.378 0 01-.451-.28.378.378 0 01.28-.45 2.631 2.631 0 001.956-3.155 2.631 2.631 0 00-3.154-1.957 2.631 2.631 0 00-1.957 3.155c.047.2-.08.403-.28.45a.378.378 0 01-.45-.28 3.38 3.38 0 012.516-4.055 3.38 3.38 0 014.056 2.516 3.38 3.38 0 01-2.517 4.056z'
      ></path>
      <defs>
        <linearGradient
          id='paint0_linear_771_9444'
          x1='10.294'
          x2='21.128'
          y1='27.288'
          y2='4.565'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#CFFA5B'></stop>
          <stop offset='0.922' stopColor='#EAFFAF'></stop>
          <stop offset='1' stopColor='#EBFFB6'></stop>
        </linearGradient>
      </defs>
    </svg>
  ),
  "external": ({ innerRef, ...props }) => (
    <svg xmlns='http://www.w3.org/2000/svg' width='35' height='34' fill='none' {...props} ref={innerRef}>
      <rect
        width='28'
        height='28'
        x='0.604'
        y='6.384'
        fill='url(#paint0_linear_771_9489)'
        rx='14'
        transform='rotate(-13.18 .604 6.384)'
      ></rect>
      <path
        fill='#434242'
        d='M17.886 16.588a.371.371 0 01-.284-.047.377.377 0 01-.12-.516l3.057-4.927a.377.377 0 01.516-.12.377.377 0 01.12.516l-3.057 4.926a.37.37 0 01-.232.168z'
      ></path>
      <path
        fill='#434242'
        d='M21.787 13.517a.378.378 0 01-.45-.28l-.462-1.972-1.972.462a.378.378 0 01-.45-.28.378.378 0 01.28-.45l2.336-.547c.2-.047.404.08.45.28l.548 2.336c.047.2-.08.404-.28.45zm-1.674 8.198l-2.921.684c-2.644.619-4.038-.246-4.657-2.89l-.684-2.92c-.619-2.644.246-4.038 2.89-4.657l.973-.228c.2-.047.404.08.451.28.047.2-.08.403-.28.45l-.973.228c-2.245.526-2.856 1.511-2.33 3.755l.684 2.921c.525 2.245 1.51 2.856 3.755 2.33l2.92-.684c2.245-.525 2.857-1.51 2.33-3.755l-.227-.973a.378.378 0 01.28-.451c.2-.047.403.08.45.28l.228.973c.62 2.644-.246 4.038-2.89 4.657z'
      ></path>
      <defs>
        <linearGradient
          id='paint0_linear_771_9489'
          x1='10.296'
          x2='21.13'
          y1='27.286'
          y2='4.563'
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

export default CustomLink;
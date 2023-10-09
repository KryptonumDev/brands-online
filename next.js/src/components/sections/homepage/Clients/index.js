'use client'
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import { motion } from 'framer-motion';
import Markdown from '@/utils/Markdown';
import styles from './styles.module.scss';
import Tag from '@/components/atoms/Tag';
import Button from '@/components/atoms/Button';
import Img from '@/utils/Img';

const Clients = ({
  data: {
    clients_Tag,
    clients_Heading,
    clients_Paragraph,
    clients_Cta,
    partners
  }
}) => {
  const [ frameWidth, setFrameWidth ] = useState(0);
  return (
    <section className={`${styles.wrapper} noMouseEffect`}>
      <header>
        <Tag>{clients_Tag}</Tag>
        <Markdown.h2>{clients_Heading}</Markdown.h2>
        <Markdown>{clients_Paragraph}</Markdown>
      </header>
      <Swiper
        slidesPerView='auto'
        spaceBetween={84}
        modules={[ A11y, Autoplay ]}
        height='106'
        centeredSlides={true}
        slideToClickedSlide={true}
        grabCursor={true}
        onSlideChange={(e) => setFrameWidth(e.slidesSizesGrid[e.activeIndex])}
        speed={600}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className={styles.swiper}
      >
        {partners.map(({ img, name, href }, i) => (
          <SwiperSlide key={i}>
            {href ? (
              <a href={href} target="_blank" rel="noopener">
                <Img data={img} aria-label={name} />
              </a>
            ) : (
              <Img data={img} aria-label={name} />
            )}
          </SwiperSlide>
        ))}
        <motion.div
          className={styles.indicator}
          initial={{
            width: Math.min(partners[0].img.asset.metadata.dimensions.width, 200)
          }}
          animate={{
            width: frameWidth === 0 ? Math.min(partners[0].img.asset.metadata.dimensions.width, 200) : frameWidth
          }}
        />
      </Swiper>
      <Button data={clients_Cta} />
    </section>
  );
};

export default Clients;
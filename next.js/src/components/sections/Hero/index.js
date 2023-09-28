'use client'
import { Suspense } from 'react';
import styles from './styles.module.scss';
import Markdown from '@/utils/Markdown';
import Button from '@/components/atoms/Button';
import { HeroRender } from '../homepage/HeroRender';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei'
import Loader from '@/components/atoms/Loader';

const Hero = ({
  data: {
    hero_Heading,
    hero_Paragraph,
    hero_Cta,
  }
}) => {
  return (
    <section className={styles.wrapper}>
      <header>
        <Markdown.h1>{hero_Heading}</Markdown.h1>
        <Markdown className={styles.paragraph}>{hero_Paragraph}</Markdown>
        <Button data={hero_Cta} />
      </header>
      <div className={styles.renders}>
        <Suspense fallback={<Loader />}>
          <Canvas>
            <Stage preset="rembrandt" intensity={1} environment="city">
              <HeroRender />
            </Stage>
            <OrbitControls
              enablePan={false}
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              autoRotate
            />
          </Canvas>
        </Suspense>
      </div>
    </section>
  );
};

export default Hero;
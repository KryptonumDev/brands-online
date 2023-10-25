'use client'
import { useState } from 'react';
import Tag from '@/components/atoms/Tag';
import styles from './styles.module.scss';
import Markdown from '@/utils/Markdown';
import Button from '@/components/atoms/Button';
import { splitWordIntoLetters } from '@/utils/functions';
import Modal from './Modal';

const MeetUs = ({
  data: {
    meetUs_Tag,
    meetUs_Heading,
    meetUs_Paragraph,
    meetUs_Cta,
    meetUs_Projects,
  }
}) => {
  const projectsImages = meetUs_Projects.map(item => item.img);
  const [modal, setModal] = useState({ active: false, index: 0});

  return (
    <section className={styles.wrapper}>
      <header>
        <Tag>{meetUs_Tag}</Tag>
        <Markdown.h2>{meetUs_Heading}</Markdown.h2>
        <Markdown className={styles.paragraph}>{meetUs_Paragraph}</Markdown>
        <Button data={meetUs_Cta} />
      </header>
      <div
        className={styles.projects}
        onMouseEnter={() => setModal(prevState => ({ ...prevState, active: true }))}
        onMouseLeave={() => setModal(prevState => ({ ...prevState, active: false }))}
      >
        {meetUs_Projects.map(({ title, description }, i) => (
          <div
            className={`${styles.item} CustomLink`}
            key={i}
            onMouseEnter={() => setModal(prevState => ({ ...prevState, index: i }))}
            onMouseLeave={() => setModal(prevState => ({ ...prevState, index: i }))}
          >
            <div className={styles.title}>
              {splitWordIntoLetters(title, styles.word, styles.letter)}
            </div>
            <Markdown className={styles.description}>{description}</Markdown>
          </div>
        ))}
        <Modal
          data={projectsImages}
          modal={modal}
        />
      </div>
    </section>
  );
};

export default MeetUs;
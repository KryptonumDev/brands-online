'use client'
import Markdown from '@/utils/Markdown';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import InputTag from '@/components/atoms/InputTag';

const Step1 = ({ stylesWrapper, heading, paragraph, options, ...props }) => {
  return (
    <motion.section
      {...props}
    >
      <header className={stylesWrapper.header}>
        <Markdown.h2>{heading}</Markdown.h2>
        <Markdown className={stylesWrapper.paragraph}>{paragraph}</Markdown>
      </header>
      <div className={styles.options}>
        {options.map(({ title, list }, optionIndex) => (
          <div className="item" key={optionIndex}>
            <p>{title}</p>
            <div className={styles.list}>
              {list.map((item, itemIndex) => (
                <InputTag
                  key={itemIndex}
                  name={`option_${optionIndex}_${itemIndex}}`}
                >{item}</InputTag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Step1;
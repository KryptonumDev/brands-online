import { useCallback, useRef, useState } from 'react';
import Markdown from '@/utils/Markdown';
import styles from './styles.module.scss';
import InputTag from '@/components/moleculas/InputTag';
import { AnimatePresence, motion } from 'framer-motion';
import NextStepBtn from '../NextStepBtn';
import { BackStep } from '..';

const Step3 = ({
  stylesWrapper,
  heading,
  paragraph,
  options,
  step,
  setStep,
  form: {
    register,
    errors
  },
  ...props
}) => {
  const wrapperOptions = useRef(null);
  const [ tag, setTag ] = useState({ added: false, showInput: false, value: '' })

  const handleAddTag = useCallback((e) => {
    e && e.preventDefault();
    if (tag.value) {
      setTag(prevState => ({ ...prevState, showInput: false, added: true }));
      setTimeout(() => {
        wrapperOptions.current.querySelector(`input[type="radio"]:last-of-type`).click();
      }, 0);
    }
  }, [tag.value]);

  const handleOtherBtn = () => {
    setTag(prevState => ({ ...prevState, showInput: true }));
    setTimeout(() => {
      wrapperOptions.current.querySelector('input[type="text"]').focus();
    }, 0);
  }

  return (
    <motion.section
      {...props}
    >
      <header className={stylesWrapper.header}>
        <Markdown.h2>{heading}</Markdown.h2>
        <Markdown className={stylesWrapper.paragraph}>{paragraph}</Markdown>
      </header>
      <div className={styles.options} ref={wrapperOptions}>
        {options.map((item, i) => (
          <InputTag
            type="radio"
            key={i}
            value={item}
            register={register('deadline')}
            errors={errors}
            >{item}</InputTag>
          ))}
        {(tag.added && !tag.showInput) && (
          <InputTag
            type="radio"
            value={tag.value}
            register={register('deadline')}
            errors={errors}
          >{tag.value}</InputTag>
        )}
        <AnimatePresence mode='wait'>
          {tag.showInput ? (
            <motion.div
              className={styles.input}
              initial={{ width: 0 }}
              animate={{ width: tag.showInput ? 'auto' : 0 }}
              exit={{ width: 'auto' }}
            >
              <input
                type="text"
                value={tag.value}
                onChange={(e) => setTag(prevState => ({ ...prevState, value: e.target.value }))}
                onKeyDown={(e) => e.key === 'Enter' && handleAddTag(e)}
              />
              <button
                className={styles.add}
                disabled={tag.value.length === 0}
                onClick={() => handleAddTag()}
                type="button"
              >
                <span>Add</span>
              </button>
              <button
                className={styles.cancel}
                type="button"
                onClick={() => setTag(prevState => ({ ...prevState, showInput: false }))}
              >
                Cancel
              </button>
            </motion.div>
          ) : (
            <motion.button
              className={styles.addTag}
              aria-hidden={tag.showInput}
              onClick={() => handleOtherBtn()}
              initial={{ width: 'auto' }}
              animate={{ width: !tag.showInput ? 'auto' : 0 }}
              exit={{ width: 0 }}
              type="button"
            >
              <PlusIcon />
              <span>Other</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <div className={stylesWrapper.ButtonContainer}>
        <BackStep setStep={setStep} step={step} />
        <NextStepBtn setStep={setStep} step={4} />
      </div>
    </motion.section>
  );
};

export default Step3;

const PlusIcon = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'>
    <path
      fill='#434242'
      d='M18 12.75H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h12c.41 0 .75.34.75.75s-.34.75-.75.75z'
    ></path>
    <path
      fill='#434242'
      d='M12 18.75c-.41 0-.75-.34-.75-.75V6c0-.41.34-.75.75-.75s.75.34.75.75v12c0 .41-.34.75-.75.75z'
    ></path>
  </svg>
);
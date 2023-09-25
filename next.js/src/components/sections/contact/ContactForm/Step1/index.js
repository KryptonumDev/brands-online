import React, { useState, useMemo, useCallback, useRef } from 'react';
import Markdown from '@/utils/Markdown';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import InputTag from '@/components/moleculas/InputTag';
import NextStepBtn from '../NextStepBtn';

const Step1 = ({
  stylesWrapper,
  heading,
  paragraph,
  options,
  setStep,
  form: {
    register,
    errors
  },
  ...props
}) => {
  const [addTags, setAddTags] = useState(
    options.map(() => ({ show: false, disabled: true, name: '' }))
  );

  const wrapperOptions = useRef(null);

  const handleShowAddTag = useCallback(
    (index) => {
      setAddTags((prevState) => {
        const updatedAddTags = [...prevState];
        updatedAddTags[index].show = true;
        return updatedAddTags;
      });
      setTimeout(() => {
        const inputElement = wrapperOptions.current.querySelector(
          `#input_${index}`
        );
        if (inputElement) inputElement.focus();
      }, 0);
    },
    [setAddTags]
  );

  const handleSetTag = useCallback(
    (e, optionIndex) => {
      const inputValue = e.target.value;
      setAddTags((prevState) => {
        const updatedAddTags = [...prevState];
        updatedAddTags[optionIndex].disabled = inputValue.trim() === '';
        updatedAddTags[optionIndex].name = inputValue;
        return updatedAddTags;
      });
    },
    [setAddTags]
  );

  const handleAddTag = useCallback(
    (e, optionIndex) => {
      e && e.preventDefault();
      const newValue = addTags[optionIndex].name;
      if (newValue) {
        const updatedOptions = [...options];
        updatedOptions[optionIndex].list.push(newValue);
        setAddTags((prevState) => {
          const updatedAddTags = [...prevState];
          updatedAddTags[optionIndex].disabled = true;
          updatedAddTags[optionIndex].name = '';
          updatedAddTags[optionIndex].checked = true;
          return updatedAddTags;
        });
      }
    },
    [addTags, options, setAddTags]
  );

  const renderedOptions = useMemo(() => {
    return options.map(({ title, list }, optionIndex) => (
      <div className="item" key={optionIndex}>
        <p>{title}</p>
        <div className={styles.list}>
          {list.map((item, itemIndex) => (
            <InputTag
              key={itemIndex}
              register={register(`services[${title}]`)}
              errors={errors}
              value={item}
            >
              {item}
            </InputTag>
          ))}
          <motion.button
            className={styles.addTag}
            aria-hidden={addTags[optionIndex].show}
            onClick={() => handleShowAddTag(optionIndex)}
            initial={{
              height: 'auto',
            }}
            animate={{
              height: !addTags[optionIndex].show ? 'auto' : 0,
            }}
            type="button"
          >
            <PlusIcon />
            <span>Other</span>
          </motion.button>
          <motion.div
            className={styles.input}
            aria-hidden={!addTags[optionIndex].show}
            initial={{
              height: 0,
            }}
            animate={{
              height: addTags[optionIndex].show ? 'auto' : 0,
            }}
          >
            <input
              id={`input_${optionIndex}`}
              type="text"
              value={addTags[optionIndex].name}
              onChange={(e) => handleSetTag(e, optionIndex)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddTag(e, optionIndex)}
            />
            <button
              className={styles.add}
              disabled={addTags[optionIndex].disabled}
              onClick={() => handleAddTag(null, optionIndex)}
              type="button"
            >
              <span>Add</span>
            </button>
            <button
              className={styles.cancel}
              type="button"
              onClick={() =>
                setAddTags((prevState) => {
                  const updatedAddTags = [...prevState];
                  updatedAddTags[optionIndex].show = false;
                  return updatedAddTags;
                })
              }
            >
              Cancel
            </button>
          </motion.div>
        </div>
      </div>
    ));
  }, [
    options,
    register,
    errors,
    addTags,
    handleShowAddTag,
    handleSetTag,
    handleAddTag,
  ]);

  return (
    <motion.section {...props}>
      <header className={stylesWrapper.header}>
        <Markdown.h2>{heading}</Markdown.h2>
        <Markdown className={stylesWrapper.paragraph}>{paragraph}</Markdown>
      </header>
      <div className={styles.options} ref={wrapperOptions}>
        {renderedOptions}
      </div>
      <NextStepBtn setStep={setStep} step={2} className={stylesWrapper.nextStepBtn} />
    </motion.section>
  );
};

export default Step1;

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

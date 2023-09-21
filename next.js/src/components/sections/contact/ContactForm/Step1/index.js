import { useRef, useState } from 'react';
import Markdown from '@/utils/Markdown';
import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import InputTag from '@/components/atoms/InputTag';
import Button from '@/components/atoms/Button';

const Step1 = ({ stylesWrapper, heading, paragraph, options, setStep, ...props }) => {
  const [ addTag, setAddTag ] = useState(options.map(() => ({ show: false, disabled: true, name: '' })));

  const wrapperOptions = useRef(null);

  const handleShowAddTag = (index) => {
    setAddTag(prevState => {
      const updatedAddTag = [...prevState];
      updatedAddTag[index].show = true;
      return updatedAddTag;
    })
    setTimeout(() => {
      wrapperOptions.current.querySelector(`#input_${index}`).focus();
    }, 0);
  }

  const handleSetTag = (e, optionIndex) => {
    const inputValue = e.target.value;
    setAddTag(prevState => {
      const updatedAddTag = [...prevState];
      updatedAddTag[optionIndex].disabled = inputValue.trim() === '';
      updatedAddTag[optionIndex].name = inputValue;
      return updatedAddTag;
    });
  }

  const handleAddTag = (optionIndex) => {
    const newValue = addTag[optionIndex].name;
    if(newValue) {
      const updatedOptions = [...options];
      updatedOptions[optionIndex].list.push(newValue);
      setAddTag(prevState => {
        const updatedAddTag = [...prevState];
        updatedAddTag[optionIndex].disabled = true;
        updatedAddTag[optionIndex].name = '';
        return updatedAddTag;
      });
    }
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
        {options.map(({ title, list }, optionIndex) => (
          <div className="item" key={optionIndex}>
            <p>{title}</p>
            <div className={styles.list}>
              {list.map((item, itemIndex) => (
                <InputTag
                  key={itemIndex}
                  name={`option_${optionIndex}_${itemIndex}`}
                >{item}</InputTag>
              ))}
              <motion.button
                className={styles.addTag}
                aria-hidden={addTag[optionIndex].show}
                onClick={() => handleShowAddTag(optionIndex)}
                initial={{
                  height: 'auto'
                }}
                animate={{
                  height: !addTag[optionIndex].show ? 'auto' : 0,
                }}
              >
                <PlusIcon />
                <span>Other</span>
              </motion.button>
              <motion.div
                className={styles.input}
                aria-hidden={!addTag[optionIndex].show}
                initial={{
                  height: 0
                }}
                animate={{
                  height: addTag[optionIndex].show ? 'auto' : 0,
                }}
              >
                <input
                  id={`input_${optionIndex}`}
                  type="text"
                  value={addTag[optionIndex].name}
                  onChange={(e) => handleSetTag(e, optionIndex)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddTag(optionIndex)}
                />
                <button
                  className={styles.add}
                  disabled={addTag[optionIndex].disabled}
                  onClick={() => handleAddTag(optionIndex)}
                >
                    <span>Add</span>
                  </button>
                <button
                  className={styles.cancel}
                  onClick={() => setAddTag(prevState => {
                    const updatedAddTag = [...prevState];
                    updatedAddTag[optionIndex].show = false;
                    return updatedAddTag;
                  })}
                >Cancel</button>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
      <div className={stylesWrapper.nextStep}>
        <Button onClick={() => setStep(2)}>Next</Button>
      </div>
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
)
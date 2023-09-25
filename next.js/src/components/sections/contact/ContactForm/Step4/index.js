import Markdown from '@/utils/Markdown';
import styles from './styles.module.scss'
import NextStepBtn from '../NextStepBtn';
import Input from '@/components/moleculas/Input';
import { regex } from '@/global/constants';
import Checkbox from '@/components/moleculas/Checkbox';
import CustomLink from '@/components/atoms/CustomLink';
import { motion } from 'framer-motion';
import { phoneValidation } from '@/utils/functions';

const Step4 = ({
  stylesWrapper,
  heading,
  paragraph,
  setStep,
  form: {
    register,
    errors
  },
  ...props
}) => {
  return (
    <motion.section
      {...props}
    >
      <header className={stylesWrapper.header}>
        <Markdown.h2>{heading}</Markdown.h2>
        <Markdown className={stylesWrapper.paragraph}>{paragraph}</Markdown>
      </header>
      <div className={styles.form}>
        <Input
          label="Name"
          type="text"
          register={register('name', {
            required: { value: true, message: `Name is required` },
            minLength: { value: 2, message: `Name should have at least 2 characters` }
          })}
          errors={errors}
        />
        <Input
          label="Email"
          type="email"
          register={register('email', {
            required: { value: true, message: `Email is required` },
            minLength: { value: 2, message: `Email should have at least 2 characters` },
            pattern: { value: regex.email, message: `Incorrect e-mail address` }
          })}
          errors={errors}
        />
        <Input
          label="Phone *(optional)*"
          type="tel"
          register={register('phone', {
            pattern: { value: regex.phone, message: `Incorrect phone number` }
          })}
          onKeyDown={(e) => phoneValidation(e)}
          errors={errors}
        />
        <Input
          label="Company *(optional)*"
          type="text"
          register={register('company')}
          errors={errors}
        />
        <Input
          label="Your message *(optional)*"
          type="text"
          textarea={true}
          register={register('message')}
          errors={errors}
        />
        <Checkbox
          label={<>
            I agree to the{' '}
            <CustomLink
              href="/privacy-policy"
              target="_blank"
              rel="noreferrer"
            >privacy policy</CustomLink>
          </>}
          register={register('legal', {
            required: { value: true, message: `Agreement is required` }
          })}
          errors={errors}
        />
      </div>
      <NextStepBtn
        setStep={setStep}
        step={4}
        className={stylesWrapper.nextStepBtn}
        type="submit"
      />
    </motion.section>
  );
};

export default Step4;
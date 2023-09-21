import Button from '@/components/atoms/Button';

const NextStepBtn = ({ setStep, step, text='Next', ...props }) => {
  const handleNextStep = () => {
    setStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <Button
      theme="primary"
      onClick={() => handleNextStep()}
      {...props}
    >{text}</Button>
  );
};

export default NextStepBtn;
import Button from '@/components/atoms/Button';

const NextStepBtn = ({ setStep, step, text='Next', className, ...props }) => {
  const handleNextStep = () => {
    setStep(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className={className}>
      <Button
        theme="primary"
        onClick={() => handleNextStep()}
        {...props}
      >{text}</Button>
    </div>
  );
};

export default NextStepBtn;
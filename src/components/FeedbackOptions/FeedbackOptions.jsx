import { ButtonList, ButtonItem, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {Object.keys(options).map(key => (
        <ButtonItem key={key}>
          <Button onClick={onLeaveFeedback(key)} option={key}>
            {key}
          </Button>
        </ButtonItem>
      ))}
    </ButtonList>
  );
};

export default FeedbackOptions;

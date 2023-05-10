import { ButtonList, ButtonItem, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {Object.keys(options).map(key => (
        <ButtonItem key={key} color={key}>
          <Button onClick={() => onLeaveFeedback(key)}>{key}</Button>
        </ButtonItem>
      ))}
    </ButtonList>
  );
};

export default FeedbackOptions;

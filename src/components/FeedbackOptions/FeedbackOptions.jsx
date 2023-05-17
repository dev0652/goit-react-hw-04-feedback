import PropTypes from 'prop-types';
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

// ######################################

const number = PropTypes.number.isRequired;

FeedbackOptions.propTypes = {
  options: PropTypes.exact({
    good: number,
    neutral: number,
    bad: number,
  }).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

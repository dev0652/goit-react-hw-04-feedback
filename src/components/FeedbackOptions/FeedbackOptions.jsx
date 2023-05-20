import PropTypes from 'prop-types';
import { ButtonList, ButtonItem, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ optionsKeys, onLeaveFeedback }) => {
  return (
    <ButtonList>
      {optionsKeys.map(key => (
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

FeedbackOptions.propTypes = {
  optionsKeys: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

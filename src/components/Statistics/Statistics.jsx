import PropTypes from 'prop-types';
import { StatList, StatItem, Percentage, Total } from './Statistics.styled';

const Statistics = ({ options, total, positivePercentage }) => {
  let smiley = null;

  if (positivePercentage >= 80) smiley = '😇';
  if (positivePercentage >= 50 && positivePercentage < 80) smiley = '😊';
  if (positivePercentage >= 30 && positivePercentage < 50) smiley = '😐';
  if (positivePercentage < 30) smiley = '😞';

  return (
    <div>
      <StatList>
        {Object.entries(options).map(([key, value]) => (
          <StatItem key={key} option={key}>
            {key}: {value}
          </StatItem>
        ))}
      </StatList>

      <Total>Total: {total}</Total>
      <Percentage>
        Positive feedback: {positivePercentage}% {smiley}
      </Percentage>
    </div>
  );
};

export default Statistics;

// ######################################

const number = PropTypes.number.isRequired;

Statistics.propTypes = {
  options: PropTypes.exact({
    good: number,
    neutral: number,
    bad: number,
  }).isRequired,
  total: number,
  positivePercentage: number,
};

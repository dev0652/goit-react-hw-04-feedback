import PropTypes from 'prop-types';
import { StatList, StatItem, Percentage, Total } from './Statistics.styled';

const Statistics = ({ options, total, positivePercentage }) => {
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
      <Percentage>Positive feedback: {positivePercentage}%</Percentage>
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

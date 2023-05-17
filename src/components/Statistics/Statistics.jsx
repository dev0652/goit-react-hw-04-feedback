import PropTypes from 'prop-types';
import { StatList, StatItem } from './Statistics.styled';

const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <StatList>
      {Object.entries(options).map(([key, value]) => (
        <StatItem key={key} option={key}>
          {key}: {value}
        </StatItem>
      ))}

      <StatItem key="total">Total: {total}</StatItem>

      <StatItem key="percentage">
        Positive feedback: {positivePercentage}%
      </StatItem>
    </StatList>
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

import React, { Component } from 'react';
import {
  Wrapper,
  Heading,
  ButtonList,
  ButtonItem,
  Button,
  StatList,
  StatItem,
} from './Feedback.styled';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((prev, value) => prev + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    // good / total * 100%
    return `${Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    )}%`;
  };

  updateFeedback = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  render() {
    const {
      state,
      updateFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    return (
      <Wrapper>
        <Heading>Rate our service</Heading>
        <ButtonList>
          {Object.keys(state).map(key => (
            <ButtonItem key={key}>
              <Button onClick={() => updateFeedback(key)}>{key}</Button>
            </ButtonItem>
          ))}
        </ButtonList>

        {Object.values(state).some(el => el !== 0) && (
          <>
            <Heading>Statistics</Heading>
            <StatList>
              {Object.entries(state).map(([key, value]) => (
                <StatItem key={key}>
                  {key}: {value}
                </StatItem>
              ))}

              <StatItem key="total">Total: {countTotalFeedback()}</StatItem>

              <StatItem key="percentage">
                Positive feedback: {countPositiveFeedbackPercentage()}
              </StatItem>
            </StatList>
          </>
        )}
      </Wrapper>
    );
  }
}

export default Feedback;

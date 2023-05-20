import React, { Component } from 'react';

import FeedbackOptions from '../FeedbackOptions';
import Notification from '../Notification';
import Section from '../Section';
import Statistics from '../Statistics';

import { Wrapper } from './App.styled';

// ######################################

class App extends Component {
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
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  updateFeedback = key => () => {
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

    // const { good, neutral, bad } = state;
    return (
      <Wrapper>
        {/* Feedback */}
        <Section title="Please leave feedback">
          <FeedbackOptions
            optionsKeys={Object.keys(state)}
            onLeaveFeedback={updateFeedback}
          />
        </Section>

        {/* Stats */}
        <Section title="Statistics">
          {/* No feedback submitted */}
          {countTotalFeedback() === 0 && (
            <Notification message="There is no feedback yet" />
          )}

          {/* Feedback submitted */}
          {countTotalFeedback() !== 0 && (
            <Statistics
              options={state}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Wrapper>
    );
  }
}

export default App;

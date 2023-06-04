import { Component } from 'react';
import Section from './section/section';
import FeedbackBtn from './buttons/buttons';
import Statictics from './statistics/statistics';
import Notification from './notifications/notifications';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedBack = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback" />
        <FeedbackBtn options={options} onLeaveFeedBack={this.onLeaveFeedBack} />
        <Section />
        <Section title="Statictics">
          <Statictics good={good} neutral={neutral} bad={bad} />
        </Section>
        <Notification message="There is no feedback" />
      </>
    );
  }
}
export { App };

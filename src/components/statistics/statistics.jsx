import css from './statistics.module.css';
import PropTypes from 'prop-types';

const Statictics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <ul className={css.feedback__list}>
      <li className={css.feedback__item}>good: {good}</li>
      <li className={css.feedback__item}>neutral: {neutral}</li>
      <li className={css.feedback__item}>bad: {bad}</li>
      <li className={css.feedback__item}>
        countTotalFeedback: {countTotalFeedback}
      </li>
      <li className={css.feedback__item}>
        positive: {countPositiveFeedbackPercentage}
      </li>
    </ul>
  );
};

Statictics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  countPositiveFeedbackPercentage: PropTypes.func,
  countTotalFeedback: PropTypes.func,
};

export default Statictics;

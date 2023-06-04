import css from './buttons.module.css';
import PropTypes from 'prop-types';

const FeedbackBtn = ({ options }) => {
  return (
    <div className={css.feedback__buttons}>
      {options.map(option => {
        return (
          <button key={option} className={css.feedback__button} type="button">
            {option}
          </button>
        );
      })}
    </div>
  );
};

FeedbackBtn.prototype = {
  options: PropTypes.array,
};
export default FeedbackBtn;

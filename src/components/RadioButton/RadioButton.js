import React from "react";
import PropTypes from "prop-types";

const RadioButton = ({ title, radioItems, name, register }) => {
  return (
    <div className="radio">
      <div className="radio__title">{title}</div>
      <ul className="radio__group">
        <li className="radio__group__item">
          <input
            type="radio"
            id="Frontend developer"
            name={name}
            value="Frontend developer"
            className="radio__group__item__input"
            {...register(name)}
          />
          <label
            htmlFor="Frontend developer"
            className="radio__group__item__label"
          >
            Frontend developer
          </label>
          <div className="radio__group__item__check"></div>
        </li>
        <li className="radio__group__item">
          <input
            type="radio"
            id="Backend developer"
            name="position"
            value="Backend developer"
            className="radio__group__item__input"
          />
          <label
            htmlFor="Backend developer"
            className="radio__group__item__label"
          >
            Backend developer
          </label>
          <div className="radio__group__item__check"></div>
        </li>
      </ul>
    </div>
  );
};

RadioButton.propTypes = {
  title: PropTypes.string,
  radioItems: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string,
  register: PropTypes.func,
};

RadioButton.defaultProps = {
  title: "",
  radioItems: [],
  name: "",
  register: () => {},
};

export default RadioButton;

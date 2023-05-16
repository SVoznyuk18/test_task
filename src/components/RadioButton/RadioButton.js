import React, {memo} from "react";
import PropTypes from "prop-types";

const RadioButton = ({ title, radioItems, name, register }) => {
  return (
    <div className="radio">
      <div className="radio__title">{title}</div>
      <ul className="radio__group">
        {radioItems?.length > 0 && radioItems.map(redioItem => (
           <li key={redioItem?.id} className="radio__group__item">
           <input
             type="radio"
             id={redioItem?.name}
             name={name}
             value={redioItem?.name}
             className="radio__group__item__input"
             {...register(name)}
           />
           <label
             htmlFor={redioItem?.name}
             className="radio__group__item__label"
           >
             {redioItem?.name}
           </label>
           <div className="radio__group__item__check"></div>
         </li>
        ))}
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

export default memo(RadioButton);

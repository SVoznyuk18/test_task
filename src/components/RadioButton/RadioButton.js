import React, {memo, useState} from "react";
import PropTypes from "prop-types";

const RadioButton = ({ title, radioItems, name, register, setValue }) => {

  const [radioValue, setRadioValue] = useState(1);

  return (
    <div className="radio">
      <div className="radio__title">{title}</div>
      <ul className="radio__group">
        {radioItems?.length > 0 && radioItems.map(radioItem => (
           <li key={radioItem?.id} className="radio__group__item">
           <input
             type="radio"
             id={radioItem?.id}
             name={name}
             value={radioItem?.id}
             className="radio__group__item__input"
            {...register(name)}
            checked={radioValue === radioItem?.id}
           />
           <label
             htmlFor={radioItem?.id}
             className="radio__group__item__label"
             onClick={() => { 
              setRadioValue(radioItem?.id); 
              setValue(name,radioItem?.id);
            }}
           >
            {radioItem?.name}
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
  setValue: PropTypes.func,
};

RadioButton.defaultProps = {
  title: "",
  radioItems: [],
  name: "",
  register: () => {},
  setValue: () => {},
};

export default memo(RadioButton);

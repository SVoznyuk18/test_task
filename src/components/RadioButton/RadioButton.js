import React from "react";

const RadioButton = () => {
    return (
        <div className="radio">
            <div className="radio__title">Select your position</div>
            <ul className="radio__group">
                <li className="radio__group__item">
                    <input type="radio" id='Frontend developer' name='position' value='Frontend developer' className="radio__group__item__input" />
                    <label htmlFor="Frontend developer"  className="radio__group__item__label">Frontend developer</label>
                    <div className="radio__group__item__check" ></div>
                </li>
                <li className="radio__group__item">
                    <input type="radio" id='Backend developer' name='position' value='Backend developer' className="radio__group__item__input" />
                    <label htmlFor="Backend developer"  className="radio__group__item__label">Backend developer</label>
                    <div className="radio__group__item__check" ></div>
                </li>
            </ul>
        </div>
    );
}

export default RadioButton;
import React from "react";

import {
  ClassicButton,
  ClassicInput,
  FileUploader,
  RadioButton,
} from "ComponentsRoot";

const Form = () => {
  return (
    <section className="formSection">
      <form className="form">
        <h1 className="form__title">Working with POST request</h1>
        <ClassicInput />
        <ClassicInput />
        <ClassicInput />
        <p className="form__radioButtons-title">Select your position</p>
        <RadioButton />
        <RadioButton />
        <RadioButton />
        <FileUploader />
        <ClassicButton />
      </form>
    </section>
  );
};

export default Form;

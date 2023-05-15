import React from "react";
import { useForm } from "react-hook-form";

import {
  ClassicButton,
  ClassicInput,
  FileUploader,
  RadioButton,
} from "ComponentsRoot";

const Form = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({ mode: "all" });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <section className="formSection">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form__title">Working with POST request</h1>
        <ClassicInput
          htmlFor="yourName"
          label="Your name"
          id="Your name"
          name="yourName"
          register={register}
          validation={{}}
          // helperText=''
          errorMessage={errors?.yourName && errors?.yourName?.message}
        />
        <ClassicInput
          htmlFor="email"
          label="Email"
          id="email"
          name="email"
          register={register}
          validation={{}}
          // helperText=''
          errorMessage={errors?.email && errors?.email?.message}
        />
        <ClassicInput
          htmlFor="phone"
          label="Phone"
          id="phone"
          name="phone"
          register={register}
          validation={{}}
          helperText="+38 (XXX) XXX - XX - XX"
          errorMessage={errors?.phone && errors?.phone?.message}
        />
        <RadioButton
          title="Select your position"
          radioItems={[]}
          name="position_id"
          register={register}
        />
        <FileUploader
          accept="image/*, .jpeg, .jpg"
          size={5 * 1024 * 1024}
          id="photo"
          name="photo"
          htmlFor="photo"
          register={register}
          placeholder="Upload your photo"
          errorMessage={errors?.avatarUrl && errors?.avatarUrl?.message}
        />
        <ClassicButton type="submit">Sign up</ClassicButton>
      </form>
    </section>
  );
};

export default Form;

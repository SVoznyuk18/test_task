import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {
  ClassicButton,
  ClassicInput,
  FileUploader,
  RadioButton,
  Spiner
} from "ComponentsRoot";
import {createNewUser} from 'ActionsRoot'

import {regExpEmail, regExpPhone} from "UtilsRoot";

const Form = () => {
  const [imgWidth, setImgWidth] = useState(0);
  const [imgHeight, setImgHeight] = useState(0);
  const [choseFile, setChoseFile] = useState(null);

  const {positions} = useSelector(state => state.positions);
  const {userLoading} = useSelector(state => state.users);
  const dispatch = useDispatch();

  const schema = yup.object({
    name: yup.string()
              .required('Required field')
              .min(2, 'Must be more than 2 characters')
              .max(60, 'Must be less than 60 characters'),
    email: yup.string()
              .required('Required field')
              .min(2,' Must be more than 2 characters')
              .max(100, 'Must be less than 100 characters')
              .matches(regExpEmail, 'User email, must be a valid email according to RFC2822'),
    phone: yup.string()
              .required('Required field')
              .matches(regExpPhone, 'Number should start with code of Ukraine +380'),
    position_id: yup.number()
              .required('Required field'),
    photo: yup.mixed()
              .test('Required', 'Required field', value => value && value.length !== 0)
              .test('isValid resolution', 'Minimum size of photo 70x70px', value => value && (imgWidth > 70 || imgHeight > 70))
              .test('isValid size', 'The photo size must not be greater than 5 Mb', value => value && (value.size < 5242880))
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setValue,
    reset, 
    getValues
  } = useForm({ resolver: yupResolver(schema), mode: 'all'});

  const onSubmit = (data) => {
    dispatch(createNewUser(data));
    reset();
    setChoseFile(null);
  };

  return (
    <section className="formSection">
      <Choose>
        <When condition={userLoading}>
          <Spiner/>
        </When>
        <Otherwise>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="form__title">Working with POST request</h1>
            <ClassicInput
              htmlFor="name"
              label="Your name"
              id="name"
              name="name"
              type="text"
              register={register}
              errorMessage={errors?.name && errors?.name?.message}
              getValues={getValues}
            />
            <ClassicInput
              htmlFor="email"
              label="Email"
              id="email"
              name="email"
              type="email"
              register={register}
              errorMessage={errors?.email && errors?.email?.message}
              getValues={getValues}
            />
            <ClassicInput
              htmlFor="phone"
              label="Phone"
              id="phone"
              name="phone"
              type="text"
              register={register}
              helperText="+38 (XXX) XXX - XX - XX"
              errorMessage={errors?.phone && errors?.phone?.message}
              getValues={getValues}
              style={{marginBottom: '43px'}}
            />
            <RadioButton
              title="Select your position"
              radioItems={positions}
              name="position_id"
              register={register}
              setValue={setValue}
            />
            <FileUploader
              accept="image/jpg, image/jpeg"
              defaultImgSize={5 * 1024 * 1024}
              id="photo"
              name="photo"
              htmlFor="photo"
              register={register}
              placeholder="Upload your photo"
              setValue={setValue}
              cbWidth={setImgWidth}
              cbHeight={setImgHeight}
              clearErrors={clearErrors}
              errorMessage={errors?.photo && errors?.photo?.message}
              choseFile={choseFile}
              cbChoseFile={setChoseFile}
            />
            <ClassicButton 
              type="submit" 
              style={{ width: "100px" }} 
              disabled={Object.keys(errors).length > 0}
            >
              Sign up
            </ClassicButton>
          </form>
        </Otherwise>
      </Choose>
     
    </section>
  );
};

export default Form;

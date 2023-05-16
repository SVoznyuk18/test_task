import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import "ScssRoot/main.scss";

import {
  ClassicButton,
  ClassicInput,
  FileUploader,
  RadioButton,
  Tooltip,
  Header,
  Promo,
  Users,
  Form,
} from "ComponentsRoot";

import {getPositions} from "ActionsRoot";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPositions());
  }, []);

  return (
    <>
      <Header />
      <Promo />
      <Users />
      <Form />
    </>
  );
}

export default App;

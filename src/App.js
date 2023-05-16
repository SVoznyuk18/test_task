import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import "ScssRoot/main.scss";

import {
  Header,
  Promo,
  Users,
  Form,
} from "ComponentsRoot";

import {getPositions, getUsers} from "ActionsRoot";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPositions());
    dispatch(getUsers());
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

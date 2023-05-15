import React from "react";
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

function App() {
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

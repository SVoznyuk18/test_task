import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Header,
  Promo,
  Users,
  Form,
  Success
} from "ComponentsRoot";

import {getPositions, getUsers, getToken} from "ActionsRoot";

function App() {

  const dispatch = useDispatch();
  const {user} = useSelector(state => state.users);

  useEffect(() => {
    dispatch(getPositions());
    dispatch(getUsers());
    dispatch(getToken());
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <Promo />
        <Users />
        <Choose>
          <When condition={user?.success}>
          <Success/>
          </When>
          <Otherwise>
          <Form />
          </Otherwise>
        </Choose>
      </div>
    </>
  );
}

export default App;

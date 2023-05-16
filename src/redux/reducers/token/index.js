import * as Types from "ConfigsRoot/constants";

const initialState = {
  token: '',
};

const getTokenSucess = (state, action) => {
  const {token} = action.payload;
  return {
    ...state,
    token
  }
}

const token = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_TOKEN_SUCCESS:
        return getTokenSucess(state, action)
    default:
      return state;
  }
};

export default token;

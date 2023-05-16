import * as Types from "ConfigsRoot/constants";

const initialState = {
  positions: [],
};

const getPositionsSuccess = (state, action) => {
  const {positions} = action.payload;
  return {
    ...state, positions
  }
}

const positions = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_POSITIONS_SUCCESS:
        return getPositionsSuccess(state, action)
    default:
      return state;
  }
};

export default positions;

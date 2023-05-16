import * as Types from "ConfigsRoot/constants";

const initialState = {
  cart: [],
  totalPrice: 0,
  totalAmount: 0,
};

const token = (state = initialState, action) => {
  switch (action.type) {
    // case Types.GET_CURRENT_ORDER_SUCCESS:
    //     return getCurrentOrderSuccess(state, action)
    default:
      return state;
  }
};

export default token;

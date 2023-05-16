import * as Types from "ConfigsRoot/constants";

const initialState = {
  users: [],
  totalPages: 0,
};

const getUsersSucces = (state, action) => {

  const {users, totalPages} = action.payload;

  return{
    ...state,
    users,
    totalPages
  }
}

const getOffsetUsersSuccess = (state, action) => {
  const {offsetUsers} = action.payload;
  let users = [...state.users, ...offsetUsers]

  return {
    ...state,
    users
  }
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return getUsersSucces(state, action)
    case Types.GET_OFFSET_USERS_SUCCESS:
      return getOffsetUsersSuccess(state, action)
    default:
      return state;
  }
};

export default users;

import * as Types from "ConfigsRoot/constants";

const initialState = {
  users: [],
  totalPages: 0,
  user: {}
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

const createNewUserSuccess = (state, action) => {
  const user = action.payload;
  
  return {
    ...state,
    user
  }
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USERS_SUCCESS:
      return getUsersSucces(state, action)
    case Types.GET_OFFSET_USERS_SUCCESS:
      return getOffsetUsersSuccess(state, action)
    case Types.CREATE_NEW_USER_SUCCESS:
      return createNewUserSuccess(state, action);
    default:
      return state;
  }
};

export default users;

import * as Types from "ConfigsRoot/constants";

const initialState = {
  users: [],
  totalPages: 0,
  user: {},
  getUsersLoading: false,
  userLoading: false,
  offsetUsersLoading: false
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

const createNewUserLoading = (state, action) => {
  const userLoading = action.payload;

  return {
    ...state,
    userLoading
  }
}

const getUsersLoading = (state, action) => {
  const getUsersLoading = action.payload;

  return {
    ...state,
    getUsersLoading
  }
}

const getOffsetUsersLoading = (state, action) => {
  const offsetUsersLoading = action.payload;

  return {
    ...state,
    offsetUsersLoading
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
    case Types.CRATE_NEW_USER_LOADING:
      return createNewUserLoading(state, action);
    case Types.GET_USERS_LOADING:
      return getUsersLoading(state, action);
    case Types.OFFSET_USERS_LOADING:
      return getOffsetUsersLoading(state, action);
    default:
      return state;
  }
};

export default users;

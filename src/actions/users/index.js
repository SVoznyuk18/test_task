import * as Types from "ConfigsRoot/constants";

export const getUsers = () => ({type: Types.GET_USERS});

export const getOffsetUsers = page => ({type: Types.GET_OFFSET_USERS, payload: page});
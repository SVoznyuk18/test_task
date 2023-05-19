import { put, call, takeLatest, select } from "redux-saga/effects";

import * as Types from "ConfigsRoot/constants";

import {getUsersApiRequest, getOffsetUsersApiRequest, createNewUserApiRequest} from 'ApiRoot'

const getToken = state => state.token.token;

function* workGetUsers() {
    try{
        yield put({type: Types.GET_USERS_LOADING, payload: true});
        const response = yield call(getUsersApiRequest);
        const users = response?.data?.users;
        const totalPages = response?.data?.total_pages;
        yield put({type: Types.GET_USERS_SUCCESS, payload: {users, totalPages} });
        yield put({type: Types.GET_USERS_LOADING, payload: false});
    }catch {
        console.log('error workGetUsers');
    }
}

function* workGetOffsetUsers(action) {
    try{
        yield put({type: Types.OFFSET_USERS_LOADING, payload: true});
        const {page} = action.payload;
        const response = yield call(getOffsetUsersApiRequest, page);
        const offsetUsers = response?.data?.users;
        yield put({type: Types.GET_OFFSET_USERS_SUCCESS, payload: {offsetUsers}});
        yield put({type: Types.OFFSET_USERS_LOADING, payload: false});
    }catch{
        console.log('error GetOffsetUsers')
    }
}

function* workCreateNewUser(action) {
    try{
        yield put({type: Types.CRATE_NEW_USER_LOADING, payload: true});
        const token = yield select(getToken);
        const formData = action.payload;
        const user = yield call(createNewUserApiRequest, formData, token);
        yield put({type: Types.CREATE_NEW_USER_SUCCESS, payload: user.data});
        yield put({type: Types.CRATE_NEW_USER_LOADING, payload: false});
    } catch{
        console.log('error workCreateNewUser');
    }
}

export default function* watchUsers() {
    yield takeLatest(Types.GET_USERS, workGetUsers);
    yield takeLatest(Types.GET_OFFSET_USERS, workGetOffsetUsers);
    yield takeLatest(Types.CREATE_NEW_USER, workCreateNewUser);
}

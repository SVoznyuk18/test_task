import { put, call, takeLatest } from "redux-saga/effects";

import * as Types from "ConfigsRoot/constants";

import {getUsersApiRequest, getOffsetUsersApiRequest} from 'ApiRoot'

function* workGetUsers() {
    try{
        const response = yield call(getUsersApiRequest);
        const users = response?.data?.users;
        const totalPages = response?.data?.total_pages;
        yield put({type: Types.GET_USERS_SUCCESS, payload: {users, totalPages} })
    }catch {
        console.log('error workGetUsers');
    }
}

function* workGetOffsetUsers(action) {
    try{
        const {page} = action.payload;
        const response = yield call(getOffsetUsersApiRequest, page);
        const offsetUsers = response?.data?.users;
        yield put({type: Types.GET_OFFSET_USERS_SUCCESS, payload: {offsetUsers}});
    }catch{
        console.log('error GetOffsetUsers')
    }
}

export default function* watchUsers() {
    yield takeLatest(Types.GET_USERS, workGetUsers);
    yield takeLatest(Types.GET_OFFSET_USERS, workGetOffsetUsers);

}

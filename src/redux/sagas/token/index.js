import { put, call, select, takeLatest } from "redux-saga/effects";

import * as Types from "ConfigsRoot/constants";
import {getTokenApiRequest} from 'ApiRoot';

function* workGetToken() {
    try {
        const response = yield call(getTokenApiRequest);
        const token = response?.data?.token;
        yield put({type: Types.GET_TOKEN_SUCCESS, payload: {token}});
    } catch {
        console.log('error workGetToken');
    }
}

export default function* watchToken() {
    yield takeLatest(Types.GET_TOKEN, workGetToken);
}

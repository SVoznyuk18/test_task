import { call, put, takeLatest } from "redux-saga/effects";

import * as Types from "ConfigsRoot/constants";

import {getPositionApiRequest} from 'ApiRoot'

function* workGetPositions() {
    try {
        const positions = yield call(getPositionApiRequest);
        yield put({type: Types.GET_POSITIONS_SUCCESS, payload: positions?.data})
    } catch {
        console.log('error workPositions')
    }
}

export default function* watchPositions() {
    yield takeLatest(Types.GET_POSITIONS, workGetPositions);

}

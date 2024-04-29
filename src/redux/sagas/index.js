import { takeEvery } from "redux-saga/effects";
import ACTION_TYPES from "../actions/actionTypes";
import { createUserSaga } from "./userSagas";
import { createCarSaga, findAllCarSagas } from "./carSagas";

function* rootSaga() {
  yield takeEvery(ACTION_TYPES.CREATE_USER_REQUEST, createUserSaga);
  yield takeEvery(ACTION_TYPES.CREATE_CAR_REQUEST, createCarSaga)
  yield takeEvery(ACTION_TYPES.FIND_ALL_CAR_REQUEST, findAllCarSagas)
}

export default rootSaga;

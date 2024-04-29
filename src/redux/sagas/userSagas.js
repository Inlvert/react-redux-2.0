import { put } from "redux-saga/effects";
import * as API from "../../api";
import * as UserActionCreators from "../actions/usersAction";

export function* createUserSaga(action) {
  try {
    const response = yield API.createUser(action.payload);

    const {
      data: { data: user },
    } = response;

    yield put(UserActionCreators.createUserSeccess(user));
  } catch (error) {
    yield put(UserActionCreators.createUserError(error));
  }
}


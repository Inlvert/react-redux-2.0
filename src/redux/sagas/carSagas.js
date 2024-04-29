import { put } from "redux-saga/effects";
import * as API from "../../api";
import * as CarActionCreators from "../actions/carsActionCreators";

export function* createCarSaga(action) {
  try {
    const response = yield API.createCar(action.payload);
    const {
      data: { data: car },
    } = response;

    yield put(CarActionCreators.createCarSeccess(car));
  } catch (error) {
    yield put(CarActionCreators.createCarError(error));
  }
}

export function* findAllCarSagas(action) {
  try {
    const response = yield API.findAllCars(action.payload);
    const {
      data: { data: cars },
    } = response;

    yield put(CarActionCreators.findAllCarsSeccess(cars));
  } catch (error) {
    yield put(CarActionCreators.findAllCarsError(error));
  }
}

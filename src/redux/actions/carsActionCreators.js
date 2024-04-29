import ACTION_TYPES from "./actionTypes";

export const createCarRequest = (carData) => ({
  type: ACTION_TYPES.CREATE_CAR_REQUEST,
  payload: carData
});

export const createCarSeccess = (car) => ({
  type: ACTION_TYPES.CREATE_CAR_SECCESS,
  payload: car
});

export const createCarError = (error) => ({
  type: ACTION_TYPES.CREATE_CAR_SECCESS,
  payload: error
});

export const findAllCarsRequest = (cars) => ({
  type: ACTION_TYPES.FIND_ALL_CAR_REQUEST,
  payload: cars
});

export const findAllCarsSeccess = (cars) => ({
  type: ACTION_TYPES.FIND_ALL_CAR_SECCESS,
  payload: cars
});

export const findAllCarsError = (error) => ({
  type: ACTION_TYPES.FIND_ALL_CAR_REQUEST,
  payload: error
});
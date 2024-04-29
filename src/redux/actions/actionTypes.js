const ACTION_TYPES = {
  INCREMENT: 'counter/increment',
  DECREMENT: 'counter/decrement',
  RESET: 'counter/reset',
  STEP: 'counter/step',
  ADD_TASK: 'task/add',
  UPDATE_TASK: 'task/update',
  DELETE_TASK: 'task/delete',
  CREATE_USER_REQUEST: 'users/createRequest',
  CREATE_USER_SECCESS: 'users/createSeccess',
  CREATE_USER_ERROR: 'users/createError',
  CREATE_CAR_REQUEST: 'cars/createRequest',
  CREATE_CAR_SECCESS: 'cars/createSeccess',
  CREATE_CAR_ERROR: 'cars/createError',
  FIND_ALL_CAR_REQUEST: 'cars/findAllRequest',
  FIND_ALL_CAR_SECCESS: 'cars/findAllSeccess',
  FIND_ALL_CAR_ERROR: 'cars/findAllError'
}

export default ACTION_TYPES;
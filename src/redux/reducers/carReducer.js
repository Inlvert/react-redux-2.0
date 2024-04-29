import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  cars: [],
  isLoading: true,
  error: null,
};

function carReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.CREATE_CAR_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ACTION_TYPES.CREATE_CAR_SECCESS: {
      const { payload: newCar } = action;
      return {
        ...state,
        isLoading: false,
        cars: [...state.cars, newCar],
      };
    }
    case ACTION_TYPES.CREATE_CAR_ERROR: {
      const { payload: error } = action;
      return {
        ...state,
        isLoading: false,
        error,
      };
    }
    case ACTION_TYPES.FIND_ALL_CAR_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ACTION_TYPES.FIND_ALL_CAR_SECCESS: {
      const { payload: cars } = action;
      return {
        ...state,
        isLoading: false,
        cars,
      };
    }
    case ACTION_TYPES.FIND_ALL_CAR_ERROR: {
      const { payload: error } = action;
      return {
        ...state,
        isLoading: false,
        error,
      };
    }
    default:
      return state;
  }
}

export default carReducer;

import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  count: 0,
  step: 1
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      const newState = {
        ...state,
        count: state.count + state.step,
      };
      return newState;
    }
    case ACTION_TYPES.DECREMENT: {
      const newState = {
        ...state,
        count: state.count - state.step,
      };
      return newState;
    }
    case ACTION_TYPES.RESET: {
      const newState = {
        ...state,
        count: state.count = 0,
        step: state.step = 1
      };
      return newState;
    }
    case ACTION_TYPES.STEP: {
      const newState = {
        ...state,
        step: action.payload
      };
      return newState;
    }
    default:
      return state;
  }
}

export default counterReducer;
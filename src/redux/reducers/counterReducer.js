import { produce } from "immer";
import ACTION_TYPES from "../actions/actionTypes";

const initialState = {
  count: 0,
  step: 1,
};

const hendlers = {
  [ACTION_TYPES.INCREMENT]: produce((draftState, action) => {
    draftState.count = draftState.count + draftState.step;
  }),
  [ACTION_TYPES.DECREMENT]: produce((draftState, action) => {
    draftState.count = draftState.count - draftState.step;
  }),
  [ACTION_TYPES.RESET]: produce((draftState, action) => {
    draftState.count = initialState.count;
    draftState.step = initialState.step;
  }),
  [ACTION_TYPES.STEP]: produce((draftState, action) => {
    draftState.step = action.payload;
  }),
};

function counterReducer(state = initialState, action) {
  const { type } = action;

  const hendler = hendlers[type];

  if(hendler) {
    return hendler(state, action);
  } else {
    return state
  }
}

// function counterReducer(state = initialState, action) {
//   switch (action.type) {
//     case ACTION_TYPES.INCREMENT: {
//       const newState = {
//         ...state,
//         count: state.count + state.step,
//       };
//       return newState;
//     }
//     case ACTION_TYPES.DECREMENT: {
//       const newState = {
//         ...state,
//         count: state.count - state.step,
//       };
//       return newState;
//     }
//     case ACTION_TYPES.RESET: {
//       const newState = {
//         ...state,
//         count: (state.count = 0),
//         step: (state.step = 1),
//       };
//       return newState;
//     }
//     case ACTION_TYPES.STEP: {
//       const newState = {
//         ...state,
//         step: action.payload,
//       };
//       return newState;
//     }
//     default:
//       return state;
//   }
// }

export default counterReducer;

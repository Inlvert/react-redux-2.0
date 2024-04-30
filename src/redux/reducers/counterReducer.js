// import { produce } from "immer";
import { createReducer } from '@reduxjs/toolkit'
// import ACTION_TYPES from "../actions/actionTypes";
import * as ActionCreatoes from '../actions/counterActionCreators'

const initialState = {
  count: 0,
  step: 1,
};

const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase(ActionCreatoes.increment.type, (state, action) => {
    state.count = state.count + state.step
  });
  // builder.addCase(ActionCreatoes.increment.toString());
  // builder.addCase(ActionCreatoes.increment);

  builder.addCase(ActionCreatoes.decrement.type, (state, action) => {
    state.count = state.count - state.step
  });
  builder.addCase(ActionCreatoes.reset.type, (state, action) => {
    return initialState
  });
  builder.addCase(ActionCreatoes.changeStep.type, (state, action) => {
    state.step = action.payload;
  });

})


// const hendlers = {
//   [ActionCreatoes.increment.toString]: produce((draftState, action) => {
//     draftState.count = draftState.count + draftState.step;
//   }),
//   [ActionCreatoes.decrement.type]: produce((draftState, action) => {
//     draftState.count = draftState.count - draftState.step;
//   }),
//   [ActionCreatoes.reset.toString]: produce((draftState, action) => {
//     draftState.count = initialState.count;
//     draftState.step = initialState.step;
//   }),
//   [ActionCreatoes.changeStep.type]: produce((draftState, action) => {
//     draftState.step = action.payload;
//   }),
// };

// function counterReducer(state = initialState, action) {
//   const { type } = action;

//   const hendler = hendlers[type];

//   if(hendler) {
//     return hendler(state, action);
//   } else {
//     return state
//   }
// }



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

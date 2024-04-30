import { createAction } from '@reduxjs/toolkit'

// import ACTION_TYPES from "./actionTypes";

// export function increment () {
//   const action = {
//     type: ACTION_TYPES.INCREMENT
//   };
//   return action
// };

export const increment = createAction('counter/increment');

// export const decrement = () => ({
//   type: ACTION_TYPES.DECREMENT
// })

export const decrement = createAction('counter/decrement');


// export const reset = () => ({
//   type: ACTION_TYPES.RESET
// })

export const reset = createAction('counter/reset');


// export const changeStep = (newStep) => ({
//   type: ACTION_TYPES.STEP,
//   payload: newStep
// })

export const changeStep = createAction('counter/step');

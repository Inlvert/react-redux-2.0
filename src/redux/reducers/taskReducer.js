// // import ACTION_TYPES from "../actions/actionTypes";

// import { createReducer } from "@reduxjs/toolkit";
// import * as ActionCreatoes from "../actions/taskActionCreators";

// const initialState = {
//   tasks: [],
// };

// const taskReducer = createReducer(initialState, (builder) => {
//   builder.addCase(ActionCreatoes.createTask.type, (state, action) => {
//     const newTask = {
//       id: Date.now(),
//       body: action.payload,
//       isDone: false,
//     };

//     // const newTasks = [...state.tasks, newTask];

//     // return {
//     //   ...state,
//     //   tasks: newTasks,
//     // };

//     state.tasks.push(newTask);

//   });
//   builder.addCase(ActionCreatoes.updateTask.type, (state, action) => {
//     const { id, newValues } = action.payload;

//     const taskIndex = state.tasks.findIndex((task, index) => id === task.id);

//     state.tasks[taskIndex] = {...state.tasks[taskIndex], ...newValues}
    
//   });
//   builder.addCase(ActionCreatoes.deleteTask.type, (state, action) => {

//     state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    
//   });
// });

// // function taskReducer (state = initialState, action) {
// //   switch (action.type) {
// //     case ACTION_TYPES.ADD_TASK: {
// //       const newTask = {
// //         id: Date.now(),
// //         body: action.payload,
// //         isDone: false
// //       };

// //       const newTasks = [...state.tasks, newTask];

// //       return {
// //         ...state,
// //         tasks: newTasks
// //       };
// //     }

// //     case ACTION_TYPES.UPDATE_TASK: {
// //       const { id, newValues } = action.payload;

// //       const { tasks } = state;

// //       const newTasks = [...tasks];

// //       const taskIndex = newTasks.findIndex((task, index) => id === task.id);

// //       const taskToUpdate = newTasks[taskIndex];

// //       const updateTask = {...taskToUpdate, ...newValues};

// //       newTasks[taskIndex] = updateTask;

// //       return {
// //         ...state,
// //         tasks: newTasks
// //       }
// //     }

// //     case ACTION_TYPES.DELETE_TASK: {
// //       const { tasks } = state;

// //       const newTasks = tasks.filter((task) => task.id !== action.payload);

// //       return {
// //         ...state,
// //         tasks: newTasks
// //       }
// //     }
// //     default:
// //       return state;
// //   }

// // }

// export default taskReducer;

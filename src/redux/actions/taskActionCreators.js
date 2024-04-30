import { createAction } from "@reduxjs/toolkit";

// import ACTION_TYPES from "./actionTypes";

// export const createTask = (taskText) => ({
//   type: ACTION_TYPES.ADD_TASK,
//   payload: taskText,
// });

// export const updateTask = ({ id, newValues }) => ({
//   type: ACTION_TYPES.UPDATE_TASK,
//   payload: {
//     id,
//     newValues,
//   },
// });

// export const deleteTask = (id) => ({
//   type: ACTION_TYPES.DELETE_TASK,
//   payload: id,
// });

export const createTask = createAction('task/add');
export const updateTask = createAction('task/update');
export const deleteTask = createAction('task/delete');
import { createSlice } from "@reduxjs/toolkit";

const SLICE_NAME = "task";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {
    createTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        body: action.payload,
        isDone: false,
      };
      state.tasks.push(newTask);
    },
    updateTask: (state, action) => {
      const { id, newValues } = action.payload;

      const taskIndex = state.tasks.findIndex((task, index) => id === task.id);

      state.tasks[taskIndex] = { ...state.tasks[taskIndex], ...newValues };
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

const { reducer: taskReducer, actions } = taskSlice;

export const { createTask, updateTask, deleteTask } = actions;

export default taskReducer;

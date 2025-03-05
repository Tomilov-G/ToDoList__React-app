import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./../types/Task";

export interface ToDoState {
  tasks: Task[];
}
const initialState: ToDoState = {
  tasks: [],
};

export const toDoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      const newTask: Task = {
        id: uuidv4(),
        text: action.payload,
        completed: false,
      };
      state.tasks.push(newTask);
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    completeTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    },
  },
});

export const { addTask, deleteTask, completeTask } = toDoSlice.actions;
export default toDoSlice.reducer;

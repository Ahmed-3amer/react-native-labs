import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@todos";

const saveTodosMiddleware = (storeAPI) => (next) => (action) => {
  const result = next(action);

  const state = storeAPI.getState();
  const todos = state.todos.todos;

  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos)).catch((err) =>
    console.log("Error saving from middleware:", err)
  );

  return result;
};

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveTodosMiddleware),
});

export default store;
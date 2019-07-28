import React, { createContext } from "react";
import todoReducer from "../reducers/todo.reducer";
import { useLocalStorageReducer } from "../hooks/useLocalStorageReducer";
import uuid from "uuid/v4";

const defaultTodos = [
  { id: uuid(), task: "Do the dishes", completed: false },
  { id: uuid(), task: "Walk the dog", completed: true }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}

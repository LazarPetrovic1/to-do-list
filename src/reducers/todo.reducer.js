import uuid from "uuid/v4";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuid(), task: action.task, completed: false }];
      break;
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);
      break;
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
      break;
    case "EDIT":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );
      break;
    default:
      return state;
  }
};

export default reducer;

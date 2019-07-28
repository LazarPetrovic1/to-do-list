import React, { useContext } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";
import { DispatchContext } from "./contexts/todos.context";

function TodoForm() {
  const [val, handleChange, reset] = useInputState("");
  const dispatch = useContext(DispatchContext);
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADD", task: val });
          reset();
        }}
      >
        <TextField
          value={val}
          onChange={handleChange}
          margin="normal"
          label="Add a new task"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;

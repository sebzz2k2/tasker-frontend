import React, { useState } from "react";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { addNewTodo } from "../redux/action";
import { useDispatch } from "react-redux";

const styles = {
  inputStack: {
    flexDirection: "row",
  },
  textField: {
    marginRight: "2em",
  },
};

const AddTodo = () => {
  const [error, setError] = useState(false);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setError(false);
    setTodo(e.target.value);
  };
  const handleSubmit = () => {
    if (todo === "") {
      setError(true);
    } else {
      setTodo("");
      dispatch(addNewTodo(todo));
    }
  };
  return (
    <Stack sx={styles.inputStack}>
      <TextField
        sx={styles.textField}
        error={!error ? false : true}
        label="Add Todo"
        size="small"
        value={todo}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Add Todo
      </Button>
    </Stack>
  );
};

export default AddTodo;

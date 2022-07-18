import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import Stack from "@mui/material/Stack";
import { List } from "./MyTodoComponents.js";
import { styles } from "./MyTodoStyles";

const MyTodo = () => {
  let { todo } = useSelector((state) => state);
  const [allTodoItem, setAllTodoItem] = useState([]);
  const [completedItem, setCompletedItem] = useState([]);
  const [todoItem, setTodoItem] = useState([]);
  useEffect(() => {
    const completedTodo = todo.filter((val) => val.completed === true);
    const notCompletedTodo = todo.filter((val) => val.completed !== true);
    setTodoItem(notCompletedTodo);
    setAllTodoItem(todo);
    setCompletedItem(completedTodo);
  }, [todo]);
  return (
    <Stack sx={styles.todoMain}>
      {todo && allTodoItem ? (
        <List title={"All"} todoItem={allTodoItem} />
      ) : null}
      {todo && completedItem ? (
        <List title={"Completed"} todoItem={completedItem} />
      ) : null}
      {todo && todoItem ? <List title={"Todo"} todoItem={todoItem} /> : null}
    </Stack>
  );
};

export default MyTodo;

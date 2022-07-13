import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Modal from "@mui/material/Modal";

import { useSelector, useDispatch } from "react-redux";
import { Stack, Typography, Checkbox, IconButton, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import { toggleTodo, deletedTodo, editTodo } from "../redux/action";

const styles = {
  paperStyles: {
    width: "30%",
    padding: ".5em",
  },
  stack: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  todoName: {
    overFlow: "hidden",
    wordWrap: "break-word",
    whiteSpace: "pre-wrap",
    wordBreak: " break-word",
    fontSize: "1.2em",
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  modalStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    border: "2px solid #000",
  },
  modalStack: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

export const AllTodoList = () => {
  const [todoItem, setTodoItem] = useState([]);
  let { todo } = useSelector((state) => state);
  useEffect(() => {
    setTodoItem(todo);
  }, [todo]);

  return (
    <Box>
      All
      {todoItem &&
        todoItem.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
          />
        ))}
    </Box>
  );
};
export const CompletedTodoList = () => {
  const [todoItem, setTodoItem] = useState([]);
  let { todo } = useSelector((state) => state);
  useEffect(() => {
    const completedTodo = todo.filter((val) => val.completed === true);
    setTodoItem(completedTodo);
  }, [todo]);

  return (
    <Box>
      completed
      {todoItem &&
        todoItem.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
          />
        ))}
    </Box>
  );
};
export const TodoList = () => {
  const [todoItem, setTodoItem] = useState([]);
  let { todo } = useSelector((state) => state);
  useEffect(() => {
    const completedTodo = todo.filter((val) => val.completed !== true);
    setTodoItem(completedTodo);
  }, [todo]);

  return (
    <Box>
      not completed
      {todoItem &&
        todoItem.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
          />
        ))}
    </Box>
  );
};

const TodoItem = (props) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const { name, completed, id } = props;
  const handleTodoChange = () => {
    dispatch(toggleTodo({ ...props }));
  };
  const deleteTodo = () => {
    dispatch(deletedTodo(id));
  };
  const openEditTodoModal = () => {
    setOpen(true);
  };
  const handleModalClose = () => {
    setOpen(false);
  };
  return (
    <Paper sx={styles.paperStyles}>
      <Stack sx={styles.stack}>
        <Checkbox
          checked={completed ? true : false}
          onChange={handleTodoChange}
        />
        <Typography
          style={{
            textDecoration: completed ? "line-through" : "none",
          }}
          sx={styles.todoName}
        >
          {name}
        </Typography>
        <Box>
          <IconButton onClick={openEditTodoModal}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={deleteTodo}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Stack>
      {open ? (
        <ModalComponent
          open={open}
          handleModalClose={handleModalClose}
          todoItem={name}
          todoId={id}
        />
      ) : null}
    </Paper>
  );
};

const ModalComponent = ({ open, handleModalClose, todoItem, todoId }) => {
  const [item, setItem] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setItem(e.target.value);
    setError(false);
  };
  const handleClose = () => {
    handleModalClose();
  };
  const handleSubmit = () => {
    if (item === "") {
      setError(true);
    } else {
      handleModalClose();
      dispatch(
        editTodo({
          id: todoId,
          name: item,
        })
      );
    }
  };
  useEffect(() => {
    setItem(todoItem);
  }, []);

  return (
    <Modal open={open} onClose={handleClose} sx={styles.modalStyle}>
      <Box sx={{ bgcolor: "white", height: "100%" }}>
        <Stack sx={styles.modalStack}>
          <Typography variant="h6" component="h2">
            Edit Todo
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <TextField
          focused
          error={!error ? false : true}
          label="Edit Todo"
          size="small"
          value={item}
          onChange={handleChange}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Box>
    </Modal>
  );
};

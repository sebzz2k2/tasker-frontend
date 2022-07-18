import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

import Modal from "@mui/material/Modal";

import { useSelector, useDispatch } from "react-redux";
import { Stack, Typography, Checkbox, IconButton, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import { toggleTodo, deletedTodo, editTodo } from "../../redux/action";
import { styles } from "./MyTodoStyles";

export const List = (props) => {
  const { title, todoItem } = props;
  return (
    <Box sx={styles.listBox}>
      <Typography sx={styles.headingTypography}>{title}</Typography>
      <Divider sx={styles.dividerColor} />
      <Stack sx={styles.listStack}>
        {todoItem.map((todo) => (
          <ListItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
          />
        ))}
      </Stack>
    </Box>
  );
};
const ListItem = (props) => {
  const { name } = props;
  return (
    <Paper sx={styles.paperStyles}>
      <Typography sx={styles.paperTitle}>{name}</Typography>
      <Divider sx={styles.dividerColor} />
    </Paper>
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

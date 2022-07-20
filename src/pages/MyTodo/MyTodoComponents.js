import React, { useState, useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneAllRoundedIcon from "@mui/icons-material/DoneAllRounded";
import RestoreRoundedIcon from "@mui/icons-material/RestoreRounded";
import CloseIcon from "@mui/icons-material/Close";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import SettingsBackupRestoreRoundedIcon from "@mui/icons-material/SettingsBackupRestoreRounded";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import Modal from "@mui/material/Modal";

import { useSelector, useDispatch } from "react-redux";
import { Stack, Typography, Checkbox, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import {
  toggleTodo,
  deletedTodo,
  editTodo,
  addNewTodo,
} from "../../redux/action";
import { styles } from "./MyTodoStyles";

export const List = (props) => {
  const { title, todoItem } = props;
  const [addButton, setAddButton] = useState(false);
  const [addOpen, setAddOpen] = useState(false);

  useEffect(() => {
    if (title === "All") {
      setAddButton(true);
    }
  }, []);
  const openModal = () => {
    setAddOpen(true);
  };
  const handleModalClose = () => {
    setAddOpen(false);
  };
  return (
    <Box sx={styles.listBox}>
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0 1.25em",
        }}
      >
        <Typography sx={styles.headingTypography}>{title}</Typography>
        {addButton ? (
          <IconButton sx={styles.addButton} onClick={openModal}>
            <AddRoundedIcon sx={{ color: "#e2e2e2" }} />
          </IconButton>
        ) : null}
      </Stack>
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
      {addOpen && (
        <ModalComponent
          open={addOpen}
          handleModalClose={handleModalClose}
          title="Add new todo"
        />
      )}
    </Box>
  );
};
const ListItem = (props) => {
  const { name, id, completed } = props;
  const dispatch = useDispatch();

  const [editOpen, setEditOpen] = useState(false);
  const [displayName, setDisplayName] = useState("");

  const openModal = () => {
    setEditOpen(true);
  };
  const handleModalClose = () => {
    setEditOpen(false);
  };
  const deleteTodo = () => {
    dispatch(deletedTodo(id));
  };
  const handleTodoChange = () => {
    dispatch(toggleTodo({ ...props }));
  };
  useEffect(() => {
    if (name.length > 10) {
      let temp = name.slice(0, 10);
      temp += "...";
      setDisplayName(temp);
    } else {
      setDisplayName(name);
    }
  }, [name]);
  return (
    <>
      <Paper sx={styles.paperStyles}>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={styles.paperTitle}>{displayName}</Typography>
          <Box>
            {completed ? (
              <IconButton sx={styles.itemButton} onClick={handleTodoChange}>
                <SettingsBackupRestoreRoundedIcon
                  sx={{ color: "#e2e2e2", fontSize: "1em" }}
                />
              </IconButton>
            ) : (
              <IconButton sx={styles.itemButton} onClick={handleTodoChange}>
                <DoneAllRoundedIcon
                  sx={{ color: "#e2e2e2", fontSize: "1em" }}
                />
              </IconButton>
            )}
            <IconButton sx={styles.itemButton} onClick={openModal}>
              <EditRoundedIcon sx={{ color: "#e2e2e2", fontSize: ".75em" }} />
            </IconButton>
            <IconButton sx={styles.itemButton} onClick={deleteTodo}>
              <RemoveRoundedIcon sx={{ color: "#e2e2e2", fontSize: "1em" }} />
            </IconButton>
          </Box>
        </Stack>
        <Divider sx={styles.dividerColor} />
      </Paper>
      {editOpen && (
        <ModalComponent
          open={editOpen}
          handleModalClose={handleModalClose}
          todoItem={name}
          todoId={id}
          title="Edit todo"
        />
      )}
    </>
  );
};

const ModalComponent = ({
  open,
  handleModalClose,
  todoItem,
  todoId,
  title,
}) => {
  const [item, setItem] = useState("");
  const [error, setError] = useState(false);
  const [type, setType] = useState("New");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setItem(e.target.value);
    setError(false);
  };
  const handleClose = () => {
    handleModalClose();
  };
  const handleSubmit = () => {
    if (item === undefined) {
      setError(true);
    } else {
      switch (type) {
        case "New":
          dispatch(addNewTodo(item));
          break;
        case "Edit":
          dispatch(
            editTodo({
              id: todoId,
              name: item,
            })
          );
          break;
      }
      handleModalClose();
    }
  };
  useEffect(() => {
    setItem(todoItem);
    if (title !== "Add new todo") {
      setType("Edit");
    }
  }, []);

  return (
    <Modal open={open} onClose={handleClose} sx={styles.modalStyle}>
      <Box sx={styles.modalBox}>
        <Stack sx={styles.modalStack}>
          <Typography sx={styles.headingTypography}>{title}</Typography>
          <IconButton sx={styles.closeButton} onClick={handleClose}>
            <CloseIcon sx={{ color: "#e2e2e2" }} />
          </IconButton>
        </Stack>
        <Divider sx={styles.dividerColor} />
        <Stack
          sx={{
            margin: "0 2em",
          }}
        >
          <TextField
            variant="outlined"
            error={error ? true : false}
            value={item}
            sx={styles.textfield}
            onChange={handleChange}
            label={`${type} todo title`}
          />

          <TextField
            // error={error ? true : false}
            multiline
            variant="outlined"
            rows={4}
            sx={styles.textfield}
            disabled
            // value={item}
            // onChange={handleChange}
            label={`${type} todo description`}
          />
          <Button onClick={handleSubmit} sx={styles.buttonStyles}>
            Submit
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

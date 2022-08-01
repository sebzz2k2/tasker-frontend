import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { styles } from "./authStyles";
import axios from "axios";

import { getToken } from "../../Extras/getToken";

import { registerUser } from "../../redux/Auth/authAction";
import { useDispatch, useSelector } from "react-redux";

import { darkThemeColors } from "../../Extras/color";

const EditUser = () => {
  const [editData, setEditData] = useState({
    userName: "",
    newPassword: "",
  });
  const [id, setId] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setId(user.id);
  }, []);
  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async () => {
    const token = await getToken();

    await axios
      .put(
        `https://tasker-sebzz.herokuapp.com/user/edit-user`,

        {
          id,
          userName: editData.userName,
          newPassword: editData.password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        alert("success");
      })
      .catch((err) => alert("failed"));
    // dispatch({
    //   id,
    //   userName: editData.userName,
    //   newPassword: editData.newPassword,
    // });
  };
  return (
    <Stack sx={styles.mainStack}>
      <Stack sx={styles.editUserContent}>
        <Typography sx={styles.headingTypography}>edit account !!!</Typography>
        <TextField
          variant="outlined"
          id="userName"
          // error={error ? true : false}
          // value={item}
          size="small"
          sx={styles.textfield}
          InputLabelProps={{ style: { color: darkThemeColors.heading } }}
          onChange={handleChange}
          label={`Enter new username`}
        />
        <TextField
          variant="outlined"
          id="password"
          // error={error ? true : false}
          // value={item}
          sx={styles.textfield}
          type="newPassword"
          onChange={handleChange}
          InputLabelProps={{ style: { color: darkThemeColors.heading } }}
          label={`Enter New Password`}
          size="small"
        />
        <Button sx={styles.buttonStyles} onClick={handleSubmit}>
          Submit
        </Button>
      </Stack>
    </Stack>
  );
};

export default EditUser;

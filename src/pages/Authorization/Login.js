import React, { useEffect, useState } from "react";
import { styles } from "./authStyles";
import loginImg from "../../Assets/svgs/login.svg";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/Auth/authAction";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { darkThemeColors } from "../../Extras/color";

const Login = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });
  const dispatch = useDispatch();

  let navigate = useNavigate();
  let { user } = useSelector((state) => state);

  useEffect(() => {
    if (user && user.userName) {
      navigate("/dashboard");
    }
  }, [user]);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = () => {
    dispatch(loginUser(loginData));
    if (user && user.userName) {
      navigate("/dashboard");
    }
  };
  return (
    <Stack sx={styles.mainStack}>
      <Stack sx={styles.subStcak}>
        <Stack sx={styles.contentBox}>
          <Typography sx={styles.headingTypography}>Login Now !!!</Typography>
          <TextField
            variant="outlined"
            id="userName"
            // error={error ? true : false}
            // value={item}
            sx={styles.textfield}
            InputLabelProps={{ style: { color: darkThemeColors.heading } }}
            onChange={handleChange}
            label={`Enter user name`}
            // size="small"
          />
          <TextField
            variant="outlined"
            id="password"
            // error={error ? true : false}
            // value={item}
            sx={styles.textfield}
            type="password"
            onChange={handleChange}
            InputLabelProps={{ style: { color: darkThemeColors.heading } }}
            label={`Enter Password`}
            // size="small"
          />
          <Button
            sx={styles.buttonStyles}
            onClick={handleSubmit}
            style={{ padding: ".8em" }}
          >
            Submit
          </Button>
          <Link to="/register">
            <Typography sx={styles.redirectText}>
              Not a user !! Click here to register
            </Typography>
          </Link>
        </Stack>
        <img style={styles.image} src={loginImg} alt="login svg" />
      </Stack>
    </Stack>
  );
};

export default Login;

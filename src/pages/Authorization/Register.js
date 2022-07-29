import React, { useState, useEffect } from "react";
import { styles } from "./authStyles";
import registerImg from "../../Assets/svgs/register.svg";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../redux/Auth/authAction";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { darkThemeColors } from "../../Extras/color";

const Register = () => {
  const [registerData, setRegisterData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
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
    setRegisterData({
      ...registerData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = () => {
    dispatch(registerUser(registerData));
  };
  return (
    <Stack sx={styles.mainStack}>
      <Stack sx={styles.subStcak}>
        <Stack sx={styles.contentBox}>
          <Typography sx={styles.headingTypography}>
            Register Now !!!
          </Typography>
          <TextField
            variant="outlined"
            id="userName"
            // error={error ? true : false}
            // value={item}
            size="small"
            sx={styles.textfield}
            InputLabelProps={{ style: { color: darkThemeColors.heading } }}
            onChange={handleChange}
            label={`Enter user name`}
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
            size="small"
          />
          <TextField
            variant="outlined"
            size="small"
            // error={error ? true : false}
            id="confirmPassword"
            // value={item}
            type="password"
            InputLabelProps={{ style: { color: darkThemeColors.heading } }}
            sx={styles.textfield}
            onChange={handleChange}
            label={`Confirm Password`}
          />
          <Button sx={styles.buttonStyles} onClick={handleSubmit}>
            Submit
          </Button>
          <Link to="/login">
            <Typography sx={styles.redirectText}>
              Already a user !! Click here to login.
            </Typography>
          </Link>
        </Stack>
        <img style={styles.image} src={registerImg} alt="register svg" />
      </Stack>
    </Stack>
  );
};

export default Register;

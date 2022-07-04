import React from "react";

import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import AddTodo from "./AddTodo";
const styles = {
  mainStack: {
    height: "4.5em",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: "0 3.5em",
    borderBottom: "solid 2px #42a5f5",
  },
  headerText: {
    fontSize: "2em",
    color: "#42a5f5",
    fontWeight: "900",
  },
};
const Header = () => {
  return (
    <Stack sx={styles.mainStack}>
      <Typography sx={styles.headerText}>Todo App</Typography>
      <AddTodo />
    </Stack>
  );
};

export default Header;

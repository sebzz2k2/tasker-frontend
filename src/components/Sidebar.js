import React, { useState, useEffect } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";

import { NavLink } from "react-router-dom";

import Stack from "@mui/material/Stack";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import AccountTreeRoundedIcon from "@mui/icons-material/AccountTreeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AccessAlarmsRoundedIcon from "@mui/icons-material/AccessAlarmsRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";

import { darkThemeColors } from "../Extras/color";
import { defaultFont } from "../Extras/fonts";

const styles = {
  drawerStyles: {
    width: 240,
    flexShrink: 0,
    backgroundColor: darkThemeColors.sideBar,
    position: "relative",
    left: "0",
    top: "0",
    boxShadow: `2.5px 0 5px ${darkThemeColors.shadowGray}`,

    "& .MuiDrawer-paper": {
      backgroundColor: darkThemeColors.sideBar,
      width: 240,
      boxSizing: "border-box",
    },
  },
  headingStack: {
    padding: "1em 2.25em .25em",
    height: "4em",
    justifyContent: "center",
  },
  mainTypography: {
    color: darkThemeColors.heading,
    fontSize: "2em",
    fontWeight: "bold",
    fontFamily: defaultFont.primary,
  },
  dividerColor: {
    bgcolor: darkThemeColors.gray,
  },
  itemButton: {
    borderRadius: "7px",
    fontFamily: defaultFont.secondary,
    fontSize: "1.25em",
    fontWeight: "600",
    width: "100%",

    "&:hover": {
      backgroundColor: darkThemeColors.hover,
      color: darkThemeColors.gray,
    },
  },
};

export const Sidebar = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    let path = window.location.pathname;
    setActive(path.substring(1));
  }, []);

  const handleClick = (event) => {
    setActive(event.target.id);
  };
  return (
    <Drawer sx={styles.drawerStyles} variant="permanent" anchor="left">
      <Stack sx={styles.headingStack}>
        <Typography sx={styles.mainTypography}>Tasker</Typography>
      </Stack>
      <Divider sx={styles.dividerColor} />
      <List>
        <ListItem>
          <Button
            sx={styles.itemButton}
            component={NavLink}
            to="/dashboard"
            onClick={handleClick}
            id="dashboard"
            style={{
              backgroundColor:
                active === "dashboard" ? darkThemeColors.hover : null,
              color:
                active === "dashboard"
                  ? darkThemeColors.gray
                  : darkThemeColors.unselected,
            }}
            startIcon={<GridViewRoundedIcon />}
          >
            Dashboard
          </Button>
        </ListItem>

        <ListItem>
          <Button
            sx={styles.itemButton}
            component={NavLink}
            to="/projects"
            onClick={handleClick}
            id="projects"
            style={{
              backgroundColor:
                active === "projects" ? darkThemeColors.hover : null,
              color:
                active === "projects"
                  ? darkThemeColors.gray
                  : darkThemeColors.unselected,
            }}
            startIcon={<AccountTreeRoundedIcon />}
          >
            Project
          </Button>
        </ListItem>

        <ListItem>
          <Button
            sx={styles.itemButton}
            component={NavLink}
            to="/teams"
            onClick={handleClick}
            id="teams"
            style={{
              backgroundColor:
                active === "teams" ? darkThemeColors.hover : null,
              color:
                active === "teams"
                  ? darkThemeColors.gray
                  : darkThemeColors.unselected,
            }}
            startIcon={<GroupsRoundedIcon />}
          >
            My Teams
          </Button>
        </ListItem>

        <ListItem>
          <Button
            sx={styles.itemButton}
            component={NavLink}
            to="/my-todo"
            onClick={handleClick}
            id="my-todo"
            style={{
              backgroundColor:
                active === "my-todo" ? darkThemeColors.hover : null,
              color:
                active === "my-todo"
                  ? darkThemeColors.gray
                  : darkThemeColors.unselected,
            }}
            startIcon={<AccessAlarmsRoundedIcon />}
          >
            My Todo
          </Button>
        </ListItem>
      </List>
      <Divider sx={styles.dividerColor} />
      <List>
        <ListItem>
          <Button
            sx={styles.itemButton}
            component={NavLink}
            to="/settings"
            onClick={handleClick}
            id="settings"
            style={{
              backgroundColor:
                active === "settings" ? darkThemeColors.hover : null,
              color:
                active === "settings"
                  ? darkThemeColors.gray
                  : darkThemeColors.unselected,
            }}
            startIcon={<SettingsRoundedIcon />}
          >
            Settings
          </Button>
        </ListItem>

        <ListItem>
          <Button
            sx={styles.itemButton}
            component={NavLink}
            to="/account"
            onClick={handleClick}
            id="account"
            style={{
              backgroundColor:
                active === "account" ? darkThemeColors.hover : null,
              color:
                active === "account"
                  ? darkThemeColors.gray
                  : darkThemeColors.unselected,
            }}
            startIcon={<ManageAccountsRoundedIcon />}
          >
            Account
          </Button>
        </ListItem>
      </List>
      <Divider sx={styles.dividerColor} />
    </Drawer>
  );
};

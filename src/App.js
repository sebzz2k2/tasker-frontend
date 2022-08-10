import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import { useSelector } from "react-redux";

import MyTodo from "./pages/MyTodo/index";
import CommingSoon from "./pages/CommingSoon";
import PageNotFound from "./components/PageNotFound";
import Login from "./pages/Authorization/Login";
import Register from "./pages/Authorization/Register";
import LoginToContinue from "./pages/LoginToContinue";
import EditUser from "./pages/Authorization/EditUser";

let styles = {
  stack1: { flexDirection: "row" },
  stack2: { width: "100%" },
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let { user } = useSelector((state) => state);

  useEffect(() => {
    const temp = localStorage.getItem("user");
    if (temp) {
      setIsLoggedIn(true);
    }
  }, [user]);

  return (
    <>
      <Box sx={{ background: "#212121" }}>
        <Router>
          <Stack sx={styles.stack1}>
            {isLoggedIn ? <Sidebar /> : null}
            <Stack sx={styles.stack2}>
              <Routes>
                {/* set route */}
                <Route path="page-not-found" element={<PageNotFound />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route
                  path="/*"
                  element={<Navigate to="/page-not-found" replace />}
                />
                {isLoggedIn ? (
                  <>
                    <Route path="dashboard" element={<CommingSoon />} />
                    <Route path="projects" element={<CommingSoon />} />
                    <Route path="teams" element={<CommingSoon />} />
                    <Route path="my-todo" element={<MyTodo />} />
                    <Route path="settings" element={<CommingSoon />} />
                    <Route path="account" element={<EditUser />} />
                  </>
                ) : (
                  <>
                    <Route path="dashboard" element={<LoginToContinue />} />
                    <Route path="projects" element={<LoginToContinue />} />
                    <Route path="teams" element={<LoginToContinue />} />
                    <Route path="my-todo" element={<LoginToContinue />} />
                    <Route path="settings" element={<LoginToContinue />} />
                    <Route path="account" element={<LoginToContinue />} />
                  </>
                )}
              </Routes>
            </Stack>
          </Stack>
        </Router>
      </Box>
    </>
  );
}

export default App;

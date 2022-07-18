import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Header from "./components/Header";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Sidebar } from "./components/Sidebar";

import MyTodo from "./pages/MyTodo/index";

let styles = {
  stack1: { flexDirection: "row" },
  stack2: { width: "100%" },
};

function App() {
  return (
    <>
      <Box sx={{ background: "#212121" }}>
        <Router>
          <Stack sx={styles.stack1}>
            <Sidebar />
            <Stack sx={styles.stack2}>
              <Header />
              <Routes>
                {/* set default route */}
                <Route path="dashboard" element={<MyTodo />} />
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />
                <Route path="projects" element={<MyTodo />} />
                <Route path="teams" element={<MyTodo />} />
                <Route path="my-todo" element={<MyTodo />} />
                <Route path="settings" element={<MyTodo />} />
                <Route path="account" element={<MyTodo />} />
              </Routes>
            </Stack>
          </Stack>
        </Router>
      </Box>
    </>
  );
}

export default App;

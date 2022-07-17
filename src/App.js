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
import {
  AllTodoList,
  CompletedTodoList,
  TodoList,
} from "./components/TodoList";

let styles = {
  stack1: { flexDirection: "row" },
  stack2: { width: "100%" },
};

function App() {
  return (
    <>
      <Box>
        <Router>
          <Stack sx={styles.stack1}>
            <Sidebar />
            <Stack sx={styles.stack2}>
              <Header />
              <Routes>
                {/* set default route */}
                <Route path="dashboard" element={<TodoList />} />
                <Route
                  path="*"
                  element={<Navigate to="/dashboard" replace />}
                />
                <Route path="projects" element={<TodoList />} />
                <Route path="teams" element={<TodoList />} />
                <Route path="my-todo" element={<TodoList />} />
                <Route path="settings" element={<TodoList />} />
                <Route path="account" element={<TodoList />} />
              </Routes>
            </Stack>
          </Stack>
        </Router>
        <AllTodoList />
        <CompletedTodoList />
        <TodoList />
      </Box>
    </>
  );
}

export default App;

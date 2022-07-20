import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Sidebar } from "./components/Sidebar";

import MyTodo from "./pages/MyTodo/index";
import CommingSoon from "./pages/CommingSoon";
import PageNotFound from "./components/PageNotFound";

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
              <Routes>
                {/* set default route */}
                <Route path="page-not-found" element={<PageNotFound />} />
                <Route path="dashboard" element={<CommingSoon />} />
                <Route
                  path="/"
                  element={<Navigate to="/dashboard" replace />}
                />
                <Route
                  path="/*"
                  element={<Navigate to="/page-not-found" replace />}
                />
                <Route path="projects" element={<CommingSoon />} />
                <Route path="teams" element={<CommingSoon />} />
                <Route path="my-todo" element={<MyTodo />} />
                <Route path="settings" element={<CommingSoon />} />
                <Route path="account" element={<CommingSoon />} />
              </Routes>
            </Stack>
          </Stack>
        </Router>
      </Box>
    </>
  );
}

export default App;

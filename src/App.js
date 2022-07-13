import React from "react";
import Box from "@mui/material/Box";
import Header from "./components/Header";
import {
  AllTodoList,
  CompletedTodoList,
  TodoList,
} from "./components/TodoList";

function App() {
  return (
    <>
      <Box>
        <Header />
        <AllTodoList />
        <CompletedTodoList />
        <TodoList />
      </Box>
    </>
  );
}

export default App;

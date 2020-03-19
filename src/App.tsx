import * as React from "react";
import "./styles.css";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./ToDoList";
import useToDoState from "./useToDoState";

export default function App() {
  const { todos, onSave, onDelete } = useToDoState();

  return (
    <div className="App">
      <h1>To Do Manager </h1>
      <Typography variant="h6" className={useStyles().title}>
        Feel free to handle with your daily cases:
      </Typography>
      <ToDoForm onSave={onSave} />
      <ToDoList todos={todos} onDelete={onDelete} />
    </div>
  );
}

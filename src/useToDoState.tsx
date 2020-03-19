import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default () => {
  const [todos, setToDo] = useState([]);

  return {
    todos: todos,
    onSave: (todo: string) =>
      setToDo([...todos, { text: todo, id: uuidv4() }]),
    onDelete: id => setToDo(todos.filter(todo => todo.id !== id))
  };
};

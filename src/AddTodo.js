import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./TodoSlice";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    dispatch(
      addTodo({
        id: Math.random().toString(),
        text: newTodo.trim(),
      })
    );
    setNewTodo("");
  };

  return (
    <div className="add-todo">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;

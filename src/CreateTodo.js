import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./TodoSlice";
import TodoItem from "./TodoItem";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [addedTodos, setAddedTodos] = useState([]);

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      const newTodo = { id: Date.now().toString(), text: inputValue };
      dispatch(addTodo(newTodo));
      setAddedTodos([...addedTodos, newTodo]);
      setInputValue("");
    } else {
      alert("Enter a valid text");
    }
  };

  return (
    <div>
      <input
        type="text"
        className="todo-user-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button className="button" onClick={handleAddTodo}>
        Add
      </button>
      <ul className="todo-items-container">
        {addedTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default CreateTodo;

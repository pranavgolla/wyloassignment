import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo, deleteTodo } from "./TodoSlice";

const TodoItem = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      dispatch(editTodo({ id: todo.id, text: newText }));
    }
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <li className="todo-item-container">
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span>{todo.text}</span>
      )}
      <div className="delete-icon-container">
        <i className="fas fa-edit" onClick={handleEdit}></i>
        <i className="far fa-trash-alt delete-icon" onClick={handleDelete}></i>
      </div>
    </li>
  );
};

export default TodoItem;

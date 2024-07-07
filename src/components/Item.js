import React, { useState } from 'react';

const Item = ({ wylo, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(wylo.text);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onEdit(wylo.id, editText);
        setIsEditing(false);
    };

    const handleInputChange = (event) => {
        setEditText(event.target.value);
    };

    return (
        <li className="todo-item-container d-flex flex-row">
            <div className=" d-flex flex-row">
                {isEditing ? (
                    <input
                        type="text"
                        value={editText}
                        onChange={handleInputChange}
                        className="edit-input"
                    />
                ) : (
                    <label className="">{wylo.text}</label>
                )}
                
            </div>
            <div className="edit-icon-container">
                    {isEditing ? (
                        <button className="button" onClick={handleSave}>Save</button>
                    ) : (
                        <button className="button" onClick={handleEdit}>Edit</button>
                    )}
                </div>
        </li>
    );
};

export default Item;

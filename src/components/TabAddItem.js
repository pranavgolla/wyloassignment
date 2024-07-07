import React, { useState } from 'react';

const TabAddItem = ({ onAddItem }) => {
    const [inputText, setInputText] = useState('');

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleAddClick = () => {
        if (inputText.trim() !== '') {
            onAddItem(inputText);
            setInputText('');
        } else {
            alert('Please enter valid text');
        }
    };

    return (
        <div className='c1'>
            <h1 className="create-task-heading">
                Create <span className="create-task-heading-subpart">Wylo</span>
            </h1>
            <div className='input-button-c1'>
            <input
                type="text"
                className="todo-user-input"
                placeholder="What needs to be done?"
                value={inputText}
                onChange={handleInputChange}
            />
            <button className="button" onClick={handleAddClick}>Add</button>
            </div>
        </div>
    );
};

export default TabAddItem;

import React, { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';

const App = () => {
  const [activeTab, setActiveTab] = useState('list');

  return (
    <div className="todos-bg-container">
      <div className="container">
        <h1 className="todos-heading">Wylo</h1>
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === 'list' ? 'active' : ''}`}
            onClick={() => setActiveTab('list')}
          >
            <i className="fas fa-list"></i>
            <span className="tab-label">All Items</span>
          </button>
          <button
            className={`tab-button ${activeTab === 'add' ? 'active' : ''}`}
            onClick={() => setActiveTab('add')}
          >
            <i className="fas fa-plus"></i>
            <span className="tab-label">Add Item</span>
          </button>
        </div>
        {activeTab === 'list' && <TodoList />}
        {activeTab === 'add' && <CreateTodo />}
      </div>
    </div>
  );
};

export default App;

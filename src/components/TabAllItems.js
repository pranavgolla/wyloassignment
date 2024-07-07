import React from 'react';
import Item from './Item';

const TabAllItems = ({ wylos, onEditItem }) => {
    return (
        <div className='c1'>
            <h1 className="todo-items-heading">
                My <span className="todo-items-heading-subpart">Wylos</span>
            </h1>
            <ul className="todo-items-container">
                {wylos.map(wylo => (
                    <Item key={wylo.id} wylo={wylo} onEdit={onEditItem} />
                ))}
            </ul>
        </div>
    );
};

export default TabAllItems;

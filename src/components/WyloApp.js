import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, editItem, loadItems } from '../redux/actions';
import TabAddItem from './TabAddItem';
import TabAllItems from './TabAllItems';
import '../styles/index.css';

const WyloApp = () => {
    const dispatch = useDispatch();
    const wylos = useSelector(state => state.wylos);
    const [activeTab, setActiveTab] = useState('add'); // State to track active tab

    useEffect(() => {
        dispatch(loadItems());
    }, [dispatch]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleAddItem = (text) => {
        dispatch(addItem(text));
    };

    const handleEditItem = (id, newText) => {
        dispatch(editItem(id, newText));
    };

    return (
        <div className="todos-bg-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 main-conatainer">
                        <h1 className="todos-heading">Wylos</h1>
                        <div className="tabs-container">
                            <button
                                className={`tab-button ${activeTab === 'add' ? 'active' : ''}`}
                                onClick={() => handleTabClick('add')}
                            >
                                Add Item
                            </button>
                            <button
                                className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
                                onClick={() => handleTabClick('all')}
                            >
                                All Items
                            </button>
                        </div>
                        {activeTab === 'add' && <><TabAddItem onAddItem={handleAddItem} /><TabAllItems wylos={wylos} onEditItem={handleEditItem} /></>}
                        {activeTab === 'all' && <TabAllItems wylos={wylos} onEditItem={handleEditItem} />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WyloApp;

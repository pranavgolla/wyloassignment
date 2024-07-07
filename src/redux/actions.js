import { ADD_ITEM, EDIT_ITEM, LOAD_ITEMS } from './types';

export const addItem = (text) => ({
    type: ADD_ITEM,
    payload: {
        text,
    },
});

export const editItem = (id, newText) => ({
    type: EDIT_ITEM,
    payload: {
        id,
        newText,
    },
});

export const loadItems = () => ({
    type: LOAD_ITEMS,
});

import { ADD_ITEM, EDIT_ITEM, LOAD_ITEMS } from './types';

const initialState = {
    wylos: [],
};

const wylosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const newWylo = {
                id: state.wylos.length + 1, // You can use uuid or any unique identifier
                text: action.payload.text,
            };
            return {
                ...state,
                wylos: [...state.wylos, newWylo],
            };

        case EDIT_ITEM:
            const editedWylos = state.wylos.map(wylo =>
                wylo.id === action.payload.id ? { ...wylo, text: action.payload.newText } : wylo
            );
            return {
                ...state,
                wylos: editedWylos,
            };

        case LOAD_ITEMS:
            const loadedWylos = JSON.parse(localStorage.getItem('wyloList')) || [];
            return {
                ...state,
                wylos: loadedWylos,
            };

        default:
            return state;
    }
};

export default wylosReducer;

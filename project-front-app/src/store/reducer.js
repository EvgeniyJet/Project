const ADD_AUTHOR = 'ADD_AUTHOR';
const DELETE_AUTHOR = 'DELETE_AUTHOR';
const GET_ALL_AUTHOR = 'GET_ALL_AUTHOR';

export const reducer = (state = [], action) => {

	if (action.type === 'ADD_AUTHOR') {
		return [...state, action.payload]
	} else if (action.type === 'DELETE_AUTHOR') {
		return state.filter(t => t.id !== action.payload);
	} else if (action.type === GET_ALL_AUTHOR) {
		return action.payload;
	} else {
		return state;
	}

}

export const addAuthorAction = (author) => ({ type: ADD_AUTHOR, payload: author });
export const deleteAuthorAction = (id) => ({ type: DELETE_AUTHOR, payload: id });
export const getAllAuthorAction = (authors) => ({ type: GET_ALL_AUTHOR, payload: authors });


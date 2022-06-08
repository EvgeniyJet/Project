import { addAuthorAction, deleteAuthorAction, getAllAuthorAction } from "../../store/reducer";


export const fetchAddAuthors = (data) => {
	return (dispatch) => {
		fetch('http://localhost:5000/api/author/add', {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		})
			.then(resp => resp.json())
			.then(json => { dispatch(addAuthorAction(json)) });
	}
}
export const fetchGetAllAddAuthors = () => {
	return (dispatch) => {
		fetch('http://localhost:5000/api/author/all', {
			method: 'GET',
			headers: { "Content-Type": "application/json" },
		})
			.then(resp => resp.json())
			.then(json => { dispatch(getAllAuthorAction(json)) });
	}
}
export const fetchDeleteAddAuthors = (id) => {
	return (dispatch) => {
		fetch('http://localhost:5000/api/author/del', {
			method: 'POST',
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ id })
		})
			.then(resp => resp.json())
			.then(json => dispatch(deleteAuthorAction(json.id)));
	}
}
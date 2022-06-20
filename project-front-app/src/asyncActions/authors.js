import { getAllAuthorAction } from "../store/reducer";

export const fetchGetAllAuthors = () => {
	return (dispatch) => {
		fetch('http://localhost:5000/api/author/all', {
			method: 'GET',
			headers: { "Content-Type": "application/json" },
		})
			.then(resp => resp.json())
			.then(json => dispatch(getAllAuthorAction(json)));
	}
}
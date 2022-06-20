import { getAllLernAction } from "../../store/reducer";

export const fetchGetAllLern = () => {
	return (dispatch) => {
		fetch('http://localhost:5000/api/lern/all', {
			method: 'GET',
			headers: { "Content-Type": "application/json" },
		})
			.then(resp => resp.json())
			.then(json => dispatch(getAllLernAction(json)));
	}
}

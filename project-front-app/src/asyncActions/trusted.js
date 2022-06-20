import { getAllTrustAction } from "../store/reducer";

export const fetchGetAllTrust = () => {
	return (dispatch) => {
		fetch('http://localhost:5000/api/trust/all', {
			method: 'GET',
			headers: { "Content-Type": "application/json" },
		})
			.then(resp => resp.json())
			.then(json => dispatch(getAllTrustAction(json)));
	}
}

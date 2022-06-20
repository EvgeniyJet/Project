import { getAllArticleAction } from "../../store/reducer";

export const fetchGetAllArticles = () => {
	return (dispatch) => {
		fetch('http://localhost:5000/api/article/all', {
			method: 'GET',
			headers: { "Content-Type": "application/json" },
		})
			.then(resp => resp.json())
			.then(json => dispatch(getAllArticleAction(json)));
	}
}

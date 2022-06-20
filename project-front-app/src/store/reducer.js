const GET_ALL_LERN = 'GET_ALL_LERN';
const GET_ALL_ARTICLE = 'GET_ALL_ARTICLE';
const GET_ALL_TRUST = 'GET_ALL_TRUST';
const GET_ALL_AUTHOR = 'GET_ALL_AUTHOR';


export const reducer = (state = [], action) => {

	if (action.type === 'GET_ALL_LERN') {
		return action.payload;
	} else if (action.type === 'GET_ALL_TRUST') {
		return action.payload;
	} else if (action.type === GET_ALL_AUTHOR) {
		return action.payload;
	} else if (action.type === GET_ALL_ARTICLE) {
		return action.payload;
	} else {
		return state;
	}

}

export const getAllLernAction = (learning) => ({ type: GET_ALL_LERN, payload: learning });
export const getAllArticleAction = (articles) => ({ type: GET_ALL_ARTICLE, payload: articles });
export const getAllAuthorAction = (authors) => ({ type: GET_ALL_AUTHOR, payload: authors });
export const getAllTrustAction = (trusted) => ({ type: GET_ALL_TRUST, payload: trusted });


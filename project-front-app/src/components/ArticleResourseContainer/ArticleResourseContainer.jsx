import ArticleResourse from '../ArticleResourse'
import s from './ArticleResourseContainer.module.sass'
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { fetchGetAllArticles } from '../../asyncActions/articles'
import { useDispatch } from 'react-redux'

const ArticleResourseContainer = () => {
	const dispatch = useDispatch();
	const article = useSelector((state) => state.articles);

	useEffect(() => {
		if (!article.length) {
			dispatch(fetchGetAllArticles())
		}
	});

	return (
		<div className={s.inner} >
			{article.map(art => <ArticleResourse key={art.id} {...art} />)}
		</div>
	);
}

export default ArticleResourseContainer;

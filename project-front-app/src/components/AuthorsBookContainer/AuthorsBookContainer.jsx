import Author from '../AuthorsBook'
import s from './AuthorsBookContainer.module.sass'
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { fetchGetAllAuthors } from '../../asyncActions/authors'
import { useDispatch } from 'react-redux'

const AuthorsBookContainer = () => {
	const dispatch = useDispatch();
	const authors = useSelector(state => state);

	useEffect(() => {
		if (!authors.length) {
			dispatch(fetchGetAllAuthors())
		}
	}, []);

	return (
		<div className={s.inner} >
			{authors.map(author => <Author key={author.id} {...author} />)}
		</div>
	);
}

export default AuthorsBookContainer;

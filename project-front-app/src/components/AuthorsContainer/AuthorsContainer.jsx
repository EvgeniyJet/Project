import Author from '../Author'
import s from './AuthorsContainer.module.sass'
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import { fetchGetAllAuthors } from '../../asyncActions/authors'
import { useDispatch } from 'react-redux'
export default function AuthorsContainer() {

	// const onSubmit = e => {
	// 	e.preventDefault();
	// 	const { name, lastname } = e.target;
	// 	const data = { name: name.value, lastname: lastname.value };
	// 	dispatch(fetchAddAuthors(data));
	// }
	const [request, setRequest] = useState(null);
	const dispatch = useDispatch();
	const authors = useSelector(state => state);

	useEffect(() => {
		if (!request) {
			setRequest(dispatch(fetchGetAllAuthors()))
		}
	}, []);

	return (
		<div className={s.container}>
			{authors.map(author => <Author key={author.id} {...author} />)}
		</div>
	)
}

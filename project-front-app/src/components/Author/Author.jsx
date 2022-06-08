import React from 'react'
import s from './Author.module.sass'
import Button from '../UI/Button'
import { useDispatch } from 'react-redux'
import { fetchDeleteAddAuthors } from '../asyncActions/authors'


export default function Author({ id, name, lastname }) {

	const dispatch = useDispatch();
	const deleteAuthor = () => dispatch(fetchDeleteAddAuthors(id));

	return (
		<div className={s.card} >
			<p>{name}</p>
			<p>{lastname}</p>
			<Button label={'Удалить'} onClick={deleteAuthor} />
			<hr />
		</div>
	)
}

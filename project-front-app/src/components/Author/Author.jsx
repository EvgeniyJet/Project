import React from 'react'
import s from './Author.module.sass'

import { useDispatch } from 'react-redux'
import { fetchDeleteAddAuthors } from '../../asyncActions/authors'


export default function Author({ id, nameBook, BookDes, price, linkBook }) {

	const dispatch = useDispatch();
	const deleteAuthor = () => dispatch(fetchDeleteAddAuthors(id));



	return (
		<div className={s.card} >
			<p>{nameBook}</p>
			<p>{BookDes}</p>
			<p>{price}</p>
			<img src={`./sourse/${linkBook}`} alt="" />
		</div>
	)
}

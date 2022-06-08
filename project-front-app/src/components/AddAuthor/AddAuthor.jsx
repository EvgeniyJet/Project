import React from 'react'
import Button from '../UI/Button/Button'
import Field from '../UI/Field'
import s from './AddAuthor.module.sass'
import { useDispatch } from 'react-redux'
import { fetchAddAuthors } from '../asyncActions/authors'


export default function AddAuthor({ addAuthorState }) {

	const dispatch = useDispatch();

	const onSubmit = e => {
		e.preventDefault();
		const { name, lastname } = e.target;
		const data = { name: name.value, lastname: lastname.value };
		dispatch(fetchAddAuthors(data));
	}

	return (
		<form className={s.form} onSubmit={onSubmit}>
			<Field horizontal={true} label="Имя:" name="name" />
			<Field horizontal={true} label="Фамилия:" name="lastname" />
			<Button label='Добавить' />

		</form>
	)
}

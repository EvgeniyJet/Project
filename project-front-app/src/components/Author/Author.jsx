import React from 'react'
import s from './Author.module.sass'

export default function Author({ id, nameBook, BookDes, price, linkBook }) {

	return (
		<div className={s.card} >
			<p>{nameBook}</p>
			<p>{BookDes}</p>
			<p>{price}</p>
			<img src={`./sourse/${linkBook}`} alt="" />
		</div>
	)
}

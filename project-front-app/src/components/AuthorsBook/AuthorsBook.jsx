import React from 'react';

import s from './AuthorsBook.module.sass'
const AuthorsBook = ({ id, nameBook, bookDesc, price, linkBook }) => {

	return (


		<div className={s.bookAuthor}>
			<div className={s.bookImg}><img src={`./sourse/${linkBook}`} alt={nameBook} /></div>
			<div className={s.bookInfo}>
				<div className={s.bookTitle}>{nameBook}</div>
				<div className={s.bookPrice}>{price}</div>
				<div className={s.bookDesc}>{bookDesc}</div>
				<a href="#" className={s.bookPrint}>Printed Book</a>
			</div>
		</div>

	);
}

export default AuthorsBook;

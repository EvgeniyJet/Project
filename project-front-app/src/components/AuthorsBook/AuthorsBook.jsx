import React from 'react';
import book1 from '../../sourse/minBook1.png';
import book2 from '../../sourse/minBook2.png';
import s from './AuthorsBook.module.sass'
const AuthorsBook = () => {
	return (
		<div className={s.inner} >
			{/* Тут будет работать логика выведения книг из базы данных */}
			<div className={s.bookAuthor}>
				<div className={s.bookImg}><img src={book1} alt="Atomic One’s" /></div>
				<div className={s.bookInfo}>
					<div className={s.bookTitle}>Atomic One’s</div>
					<div className={s.bookPrice}>$ 13.84 USD</div>
					<div className={s.bookDesc}>As the book contains theoretical content as well as solved questions.</div>
					<a href="#" className={s.bookPrint}>Printed Book</a>
				</div>
			</div>
			<div className={s.bookAuthor}>
				<div className={s.bookImg}><img src={book2} alt="The Dark Light" /></div>
				<div className={s.bookInfo}>
					<div className={s.bookTitle}>The Dark Light</div>
					<div className={s.bookPrice}>$ 86.11 USD</div>
					<div className={s.bookDesc}>As the book contains theoretical content as well as solved questions.</div>
					<a href="#" className={s.bookPrint}>Printed Book</a>
				</div>
			</div>
		</div>
	);
}

export default AuthorsBook;

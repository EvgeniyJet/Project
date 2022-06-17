import React from 'react';
import get from '../../sourse/get.png';
import s from './GetBook.module.sass';
const GetBook = () => {
	return (
		<div className={s.inner}>
			<div className={s.info}>
				<div className={s.title}>Get Book Copy Today!</div>
				<p className={s.desc}>We believe that bookstores are essential to a healthy culture. They’re where authors can connect with readers.</p>
			</div>
			<img src={get} alt="book" className={s.getBook} />
		</div>
	);
}

export default GetBook;

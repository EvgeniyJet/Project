import React from 'react';
import book from '../../sourse/firstBook.png';
import Button from '../UI/Button/Button';
import s from './BestBook.module.sass'
const BestBook = () => {
	return (

		<div className={s.wrap}>
			<div className={s.info}>
				<p className={s.welcome}>Welcome to Pages!!!</p>
				<h1 className={s.title}>
					Your Books From<br />The Best Writer.
				</h1>
				<p className={s.desc}>
					We believe that reading books are essential to a healthy culture. <br />They’re where authors can connect with readers.
				</p>
				<div className={s.buttonBlock}>
					<Button>Order Today</Button>
					<a href="#" className={s.demo}>Read Free Demo</a>
				</div>
				<div className={s.bookInfo}>
					<div className={s.pages}>
						<div className={s.Title}>Pages:</div>
						<div className={s.Desc}>250pages</div>
					</div>
					<div className={s.length}>
						<div className={s.Title}>Length:</div>
						<div className={s.Desc}>10 Hours</div>
					</div>
					<div className={s.raiting}>
						<div className={s.Title}>Rating:</div>
						<div className={s.Desc}>4.5/5 (305 ratings)</div>
					</div>
				</div>
			</div>
			<div className={s.book}>
				<img src={book} alt="" className={s.bookImg} />
			</div>
		</div>

	);
}

export default BestBook;

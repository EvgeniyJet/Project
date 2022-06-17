import React from 'react';
import s from './AboutAuthor.module.sass';
import author from '../../sourse/author.png';
import qr from '../../sourse/qr.png';
const AboutAuthor = () => {
	return (
		<div className={s.inner}>
			<div className={s.authorImg}><img src={author} alt="Author" /></div>
			<div className={s.aboutAuthor}>
				<h2 className={s.title}>About the Author</h2>
				<p className={s.desc}>We believe that bookstores are essential to a healthy culture.
					They’re where authors can connect with readers, where we discover new writers,
					where children get hooked on the thrill of reading that can last a lifetime.</p>
				<div className={s.numberAuthor}>
					<div className={s.publisched}>
						<div className={s.number}>02</div>
						<div className={s.numberDesc}>Books Published</div>
					</div>
					<div className={s.line}></div>
					<div className={s.reviews}>
						<div className={s.number}>4.5</div>
						<div className={s.numberDesc}>User Reviews</div>
					</div>
					<div className={s.line}></div>
					<div className={s.awards}>
						<div className={s.number}>04</div>
						<div className={s.numberDesc}>Best Seller Awards</div>
					</div>
				</div>

				<div className={s.infoAuthor}>
					<img src={qr} alt={s.qr} className={s.qr} />
					<div className={s.contact}>
						<p className={s.name}>John Abraham , Ph.d</p>
						<p className={s.mail}>Mail: <a href=".mailto:johnabraham@gmail.com">johnabraham@gmail.com</a></p>
						<p className={s.phone}>Phone: <a href="tel:(+2) 123 545 9000" >(+2) 123 545 9000</a></p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutAuthor;

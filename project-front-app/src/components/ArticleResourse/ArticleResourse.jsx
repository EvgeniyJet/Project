import React from 'react';
import art1 from '../../sourse/art1.png';
import art2 from '../../sourse/art2.png';
import art3 from '../../sourse/art3.png';
import s from './ArticleResourse.module.sass'
const ArticleResourse = () => {
	return (
		<div className={s.inner}>
			{/* Сделаю вывод статей из БД */}
			<div className={s.article}>
				<img src={art1} alt="" />
				<div className={s.infoArticle}>
					<div className={s.title}>Significant reading has more info number</div>
					<p className={s.desc}>Override the digital divide with additional clickthroughs from DevOps for real-time schemas.</p>
					<div className={s.data}>October 6, 2021</div>
				</div>
			</div>
			<div className={s.article}>
				<img src={art2} alt="" />
				<div className={s.infoArticle}>
					<div className={s.title}>Many variations of pass majority have suffered</div>
					<p className={s.desc}>Capitalize on low-hanging fruit to identify a ballpark value-added activity to beta test.</p>
					<div className={s.data}>October 6, 2021</div>
				</div>
			</div>
			<div className={s.article}>
				<img src={art3} alt="" />
				<div className={s.infoArticle}>
					<div className={s.title}>Words which don’t look even slightly believable</div>
					<p className={s.desc}>Podcasting operational change management inside of workflows to establish a framework.</p>
					<div className={s.data}>October 6, 2021</div>
				</div>
			</div>
		</div>
	);
}

export default ArticleResourse;

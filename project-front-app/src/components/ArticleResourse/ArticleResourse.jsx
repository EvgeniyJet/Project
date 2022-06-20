import React from 'react';

import s from './ArticleResourse.module.sass'
const ArticleResourse = ({ id, title, body, data, linkIMG }) => {
	return (

		<div className={s.article}>
			<img src={`./sourse/${linkIMG}`} alt={title} />
			<div className={s.infoArticle}>
				<div className={s.title}>{title}</div>
				<p className={s.desc}>{body}</p>
				<div className={s.data}>{data}</div>
			</div>
		</div>

	);
}

export default ArticleResourse;

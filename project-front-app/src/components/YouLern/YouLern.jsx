import React from 'react';

import s from './YouLern.module.sass'
const YouLern = ({ id, numbers, desc }) => {
	return (
		<div className={s.boxes}>
			<div className={s.box}>
				<div className={s.number}>{numbers}</div>
				<p className={s.desc}>{desc}</p>
			</div>
		</div>


	);
}

export default YouLern;

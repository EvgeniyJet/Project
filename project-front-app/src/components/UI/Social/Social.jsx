import React from 'react';
import s from './Social.module.sass'
const Social = ({ icon, type }) => {
	return (
		<i className={s.social} type={type}>
			{icon}
		</i>
	);
}

export default Social;

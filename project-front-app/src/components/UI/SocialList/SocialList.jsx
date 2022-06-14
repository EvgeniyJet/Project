import React from 'react';
import Social from '../Social/Social';

import s from './SocialList.module.sass'

const SocialList = ({ namelist, colorVariant }) => {
	return (
		<ul className={s.list}>
			{namelist.map((name, index) => (
				<li key={index} className={s.item}>
					<Social name={name} colorVariant={colorVariant} />
				</li>
			))}

		</ul>
	);
}

export default SocialList;

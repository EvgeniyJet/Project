import React from 'react';
import { linksUtility } from './NavFooterUtility.utils';
import s from './NavFooterUtility.module.sass'
const NavFooterUtility = () => {
	return (
		<ul className={s.list}>
			{linksUtility.map((item, index) => (
				<li key={index} className={s.item} href={item.link}>
					{item.nameLink}
				</li>
			))}

		</ul>
	);
}

export default NavFooterUtility;

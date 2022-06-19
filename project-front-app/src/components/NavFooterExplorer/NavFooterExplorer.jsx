import React from 'react';
import { linksExplorer } from './NavFooterExplorer.utils';
import s from './NavFooterExplorer.module.sass'
const NavFooterExplorer = () => {
	return (
		<ul className={s.list}>
			{linksExplorer.map((item, index, nameLink, link) => (
				<li key={index} className={s.item} href={item.link}>
					{item.nameLink}
				</li>
			))}

		</ul>
	);
}

export default NavFooterExplorer;

import React from 'react';
import { linksExplorer } from '../NavFooter/NavFooter.utils';
import s from './NavFooter.module.sass'
const NavFooter = () => {
	return (
		<ul className={s.list}>
			{linksExplorer.map((nameLink, index, link) => (
				<li key={index} className={s.item} href={linksExplorer.link}>
					{linksExplorer.nameLink}
				</li>
			))}

		</ul>
	);
}

export default NavFooter;

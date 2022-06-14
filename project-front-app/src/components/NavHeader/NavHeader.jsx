import React from 'react'
import s from './NavHeader.module.sass'

export default function NavHeader() {
	return (
		<nav className={s.menu}>
			<ul className={s.list}>
				<li><a href="#" className={s.link}>Home</a></li>
				<li><a href="#" className={s.link}>About</a></li>
				<li><a href="#" className={s.link}>Pages</a></li>
				<li><a href="#" className={s.link}>Contact Us</a></li>
			</ul>
		</nav>
	)
}

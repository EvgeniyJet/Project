import React from 'react'
import s from './NavHeader.module.sass'


const NavHeader = () => {
	return (
		<nav className={s.menu}>
			<ul className={s.list}>
				<li>
					<a href="#" className={`${s.link} ${s.active}`}>Home</a>
				</li>
				<li>
					<a href="#" className={s.link}>About</a>
				</li>
				<li>
					<a href="#" className={s.link}>Pages</a>
				</li>
				<li>
					<a href="#" className={`${s.link} ${s.contact}`}>Contact Us</a>
				</li>
			</ul>

		</nav >
	)
}
export default NavHeader

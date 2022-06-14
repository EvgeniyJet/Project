import React from 'react'
import s from './NavHeader.module.sass'
import { slide as Menu } from 'react-burger-menu'

const NavHeader = () => {

	showSettings(event) {
		event.preventDefault();



	}
	return (
		<nav className={s.menu}>
			<ul className={s.list}>
				{/* <li>
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
			</li> */}
			</ul>
			<Menu>
				<a id="home" className="menu-item" href="/">Home</a>
				<a id="about" className="menu-item" href="/about">About</a>
				<a id="contact" className="menu-item" href="/contact">Contact</a>
				<a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
			</Menu>
		</nav >
	)
}
export default NavHeader
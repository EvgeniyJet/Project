import React from 'react'
import Button from '../UI/Button/Button'
import s from './Header.module.sass'
import Social from '../UI/Social'
import NavHeader from '../NavHeader/NavHeader';

import logo from '../../sourse/logo.png';

export default function Header() {
	return (
		<header className={s.header}>
			<div className={s.wrap}>

				<div className={s.left}>
					<a href="" className={s.logo}>
						<img src={logo} alt="logo" />
					</a>
					<div className={s.socialInner}>
						<Social type="head">f</Social>
						<Social type="head">t</Social>
						<Social type="head">in</Social>
					</div>
				</div>

				<div className={s.right}>
					<NavHeader />
					<Button>Order Today</Button>
				</div>
			</div>
		</header>
	)
}

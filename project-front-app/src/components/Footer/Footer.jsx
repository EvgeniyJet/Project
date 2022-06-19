import React from 'react'
import Logo from '../UI/Logo';
import SocialList from '../UI/SocialList/SocialList';
import { socialList } from './Footer.utils';
import NavFooterUtility from '../NavFooterUtility';
import NavFooterExplorer from '../NavFooterExplorer';

import s from './Footer.module.sass'

export default function Footer() {
	return (

		<footer>
			<div className={s.wrap}>
				<div className={s.inner}>
					<Logo />
					<SocialList namelist={socialList} colorVariant="dark" />
				</div>
				<div className={`${s.menu} ${s.explorer}`}>
					<h3 className={s.title}>Explore</h3>
					<NavFooterExplorer />
				</div>
				<div className={`${s.menu} ${s.utility}`}>
					<h3 className={s.title}>Utility Pages</h3>
					<NavFooterUtility />
				</div>
				<div className={`${s.menu} ${s.contacts}`}>
					<h3 className={s.title}>Keep in Touch</h3>
					<div className={s.innerContact}>
						<p>Address :</p>
						<a href="#" className={s.addres}>24A Kingston St, Los Vegas<br />NC 28202, USA.</a>
					</div>
					<div className={s.innerContact}>
						<p>Mail :</p>
						<a href="#" className={s.mail}>support@pages.com</a>
					</div>
					<div className={s.innerContact}>
						<p>Phone :</p>
						<a href="#" className={s.phone}>(+22) 123 - 4567 - 900</a>
					</div>
				</div>
			</div>
		</footer>

	)
}

import React from 'react'
import Button from '../UI/Button/Button';
import s from './Header.module.sass';
import SocialList from '../UI/SocialList/SocialList';
import NavHeader from '../NavHeader/NavHeader';
import NavBurgerMenu from '../UI/NavBurberMenu';
import { socialList } from './Header.utils';
import logo from '../../sourse/logo.png';


const Header = ({ label }) => {

	return (
		<header className={s.header}>
			<div className={s.wrap}>

				<div className={s.left}>
					<a href="" className={s.logo}>
						<img src={logo} alt="logo" />
					</a>
					<div className={s.socialInner}>
						<SocialList namelist={socialList} colorVariant="light" />
					</div>
				</div>

				<div className={s.right}>
					<NavHeader />
					<Button >Order Today</Button>
					<NavBurgerMenu className={s.burger} />
				</div>
			</div>
		</header>
	)
}
export default Header;
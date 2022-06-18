import React from 'react'
import Button from '../UI/Button/Button';
import s from './Header.module.sass';
import SocialList from '../UI/SocialList/SocialList';
import NavHeader from '../NavHeader/NavHeader';
import NavBurgerMenu from '../UI/NavBurberMenu';
import { socialList } from './Header.utils';
import Logo from '../UI/Logo';
import useMediaQuery from "../../Hooks/useMediaQuery";


const Header = () => {
	const isDesktop = useMediaQuery('(min-width: 1024px)');
	return (
		<header className={s.header}>
			<div className={s.wrap}>

				<div className={s.left}>
					<Logo />
					<div className={s.socialInner}>
						<SocialList namelist={socialList} colorVariant="light" />
					</div>
				</div>

				<div className={s.right}>
					<NavHeader />
					<Button >Order Today</Button>
					{!isDesktop && <NavBurgerMenu className={s.burger} />}
				</div>
			</div>
		</header>
	)
}
export default Header;
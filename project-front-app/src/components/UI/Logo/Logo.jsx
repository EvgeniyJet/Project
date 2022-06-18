import React from 'react';
import logo from '../../../sourse/logo.png';
import s from './Logo.module.sass';

const Logo = () => {
	return (
		<a href="" className={s.logo}>
			<img src={logo} alt="logo" />
		</a>
	);
}

export default Logo;

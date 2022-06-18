import React from 'react'
import { slide as Menu } from 'react-burger-menu';
import s from './NavBurberMenu.module.sass';

class Example extends React.Component {
	showSettings(event) {
		event.preventDefault();

	};

	render() {
		var styles = {
			bmBurgerButton: {
				position: 'fixed',
				width: '36px',
				height: '30px',
				right: '36px',
				top: '40px',
			},
			bmBurgerBars: {
				background: '#fff'
			},
			bmBurgerBarsHover: {
				background: '#a90000'
			},
			bmCrossButton: {
				height: '54px',
				width: '54px',
				right: '15px'
			},
			bmCross: {
				background: '#bdc3c7',
				height: '40px',
				width: '5px'
			},
			bmMenuWrap: {
				position: 'fixed',
				height: '100%',
				width: '50%',
				top: '0'
			},
			bmMenu: {
				background: '#405986',
				padding: '2.5em 0 0 2.5em',
				fontSize: '1.15em'
			},
			bmMorphShape: {
				fill: '#373a47'
			},
			bmItemList: {
				color: '#b8b7ad',
			},
			bmItem: {
				display: 'inline-block'
			},
			bmOverlay: {
				background: 'rgba(0, 0, 0, 0.3)'
			}
		};

		return (
			<Menu right styles={styles} id={"sidebar"} >
				<ul className={s.list}>
					<li>
						<a href="#" id={s.home} className={`${s.link} ${s.active}`}>Home</a>
					</li>
					<li>
						<a href="#" id={s.about} className={s.link}>About</a>
					</li>
					<li>
						<a href="#" id={s.pages} className={s.link}>Pages</a>
					</li>
					<li>
						<a href="#" className={`${s.link} ${s.menu_item_small}`} onClick={this.showSettings}>Contact Us</a>
					</li>
				</ul>
			</Menu >
		);
	}
}

export default Example

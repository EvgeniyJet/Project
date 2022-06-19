import React from 'react'
import s from './Trust.module.sass'
import amazon from '../../sourse/amazon.png';
import Megan from '../../sourse/Megan.png';
import Megank from '../../sourse/Megank.png';
import Urban from '../../sourse/Urban.png';
export default function Trust() {
	return (
		<div className={s.inner}>
			{/* Буду выводить из БД */}
			<div className={s.trust}>
				<div className={s.logo}>
					<img src={amazon} alt="amazon" />
				</div>
				<div className={s.name}>Amazen Corp.</div>
				<p className={s.desc}>They has been helping readers, music lovers, and videophiles find quality material.</p>
			</div>
			<div className={s.trust}>
				<div className={s.logo}>
					<img src={Megan} alt="Megan" />
				</div>
				<div className={s.name}>Megan Books</div>
				<p className={s.desc}>They has been helping readers, music lovers, and videophiles find quality material.</p>
			</div>
			<div className={s.trust}>
				<div className={s.logo}>
					<img src={Megank} alt="Megank" />
				</div>
				<div className={s.name}>Megank</div>
				<p className={s.desc}>They has been helping readers, music lovers, and videophiles find quality material.</p>
			</div>
			<div className={s.trust}>
				<div className={s.logo}>
					<img src={Urban} alt="Urban" />
				</div>
				<div className={s.name}>Urban Store</div>
				<p className={s.desc}>They has been helping readers, music lovers, and videophiles find quality material.</p>
			</div>
		</div>
	)
}

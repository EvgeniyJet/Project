import React from 'react'
import s from './Trust.module.sass'

const Trust = ({ id, linkLogo, nameComp, descComp }) => {
	return (

		<div className={s.trust}>
			<div className={s.logo}>
				<img src={`./sourse/${linkLogo}`} alt={nameComp} />
			</div>
			<div className={s.name}>{nameComp}</div>
			<p className={s.desc}>{descComp}</p>
		</div>

	)
}
export default Trust;
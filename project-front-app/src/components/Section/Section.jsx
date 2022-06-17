import React from 'react';
import s from './Section.module.sass'
const SectionWrap = ({ children, bgVariant }) => {
	return (
		<section className={`${s.section} ${s[bgVariant]}`}>
			<div className={s.wrap}>
				{children}
			</div>
		</section>

	);
}

export default SectionWrap;

import React from 'react';
import s from './Section.module.sass'
const SectionWrap = ({ children }) => {
	return (
		<section className={s.section}>
			{children}
		</section>

	);
}

export default SectionWrap;

import YouLern from '../YouLern'
import s from './LernContainer.module.sass'
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { fetchGetAllLern } from '../../asyncActions/lern'
import { useDispatch } from 'react-redux'
import you from '../../sourse/You.png';

const LernContainer = () => {
	const dispatch = useDispatch();
	const learning = useSelector((state) => state.learning);

	useEffect(() => {
		if (!learning.id) {
			dispatch(fetchGetAllLern())
		}
	}, []);

	return (
		<div className={s.inner} >
			<div className={s.boxes}>
				{learning.map(lern => <YouLern key={lern.id} {...lern} />)}
			</div>

			<div className={s.author}><img src={you} alt="You Lern" /></div>
		</div>
	);
}

export default LernContainer;

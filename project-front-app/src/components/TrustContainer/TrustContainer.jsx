import Trust from '../Trust'
import s from './TrustContainer.module.sass'
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { fetchGetAllTrust } from '../../asyncActions/trusted'
import { useDispatch } from 'react-redux'

const TrustContainer = () => {
	const dispatch = useDispatch();
	const trusted = useSelector(state => state);

	useEffect(() => {
		if (!trusted.length) {
			dispatch(fetchGetAllTrust())
		}
	});

	return (
		<div className={s.inner} >
			{trusted.map(company => <Trust key={company.id} {...company} />)}
		</div>
	);
}

export default TrustContainer;

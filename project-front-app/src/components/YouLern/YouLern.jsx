import React from 'react';
import you from '../../sourse/You.png';
import s from './YouLern.module.sass'
const YouLern = () => {
	return (
		<div className={s.inner}>
			{/* Тут будем получать инфу для боксов из БД */}
			<div className={s.boxes}>
				<div className={s.box}>
					<div className={s.number}>01</div>
					<p className={s.desc}>Use HDFS & Map Reduce for storing & analyzing data at scale.</p>
				</div>
				<div className={s.box}>
					<div className={s.number}>02</div>
					<p className={s.desc}>Consume streaming data using Spark Streaming, Flink, and Storm.</p>
				</div>
				<div className={s.box}>
					<div className={s.number}>03</div>
					<p className={s.desc}>Choose an appropriate data storage technology for your application</p>
				</div>
				<div className={s.box}>
					<div className={s.number}>04</div>
					<p className={s.desc}>Analyze non-relational data using HBase, Cassandra, and MongoDB.</p>
				</div>
			</div>
			<div className={s.author}><img src={you} alt="You Lern" /></div>
		</div>
	);
}

export default YouLern;

import React, { useState, useRef, useEffect } from 'react';
import { getCountTratamientos } from '../../../helpers/Backend/Dashboard/getCountTratamientos';

export const CountTratamientos = () => {
	const [Data, setData] = useState(null);

	const _isMounted = useRef(true);

	useEffect(() => {
		getCountTratamientos()
			.then((dataDoctors) => {
				if (_isMounted.current) {
					setData(dataDoctors[0].cantidad);
				}
			})
			.catch((error) => {
				console.info('No se pudo encontrar la cantidad tratamientos', error);
			});

		return () => {
			_isMounted.current = false;
		};
	}, []);
	return (
		<div className="card">
			<i className="fa fa-user-o fa-2x text-lightblue" aria-hidden="true"></i>
			<div className="card_inner">
				<p className="text-primary-p">Número de Tratamientos</p>
				<span className="font-bold text-title">{Data ? Data : null}</span>
			</div>
		</div>
	);
};

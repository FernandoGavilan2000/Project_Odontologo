import React, { useEffect, useRef, useState } from 'react';
import { getAllSolicitudes } from '../../../helpers/Backend/Dashboard/getAllSolicitudes';
import { MiniSpinner } from '../../Tools/MiniSpinner';
import Swal from 'sweetalert2';
import { delSolicitud } from '../../../helpers/Backend/Dashboard/delSolicitud';

const CardTask = ({ task, setUpdate }) => {
	return (
		<div className="card1">
			<p className="txt_chartDelete">
				<b onClick={() => {}}>Eliminar</b>
			</p>
			<h3>
				<b>
					Solicitud Num : <span>{task.s_id}</span>
				</b>
			</h3>
			<p className="txt_chart">
				<b>Nombre:</b> <span>{task.s_fullname}</span>
			</p>
			<p className="txt_chart">
				<b>Telef:</b> <span>{task.s_cellphone}</span>
			</p>
			<p className="txt_chartShowMore">
				<b>Ver Mas</b>
			</p>
		</div>
	);
};

export const DashboardTask = () => {
	const [Data, setData] = useState(null);
	const [Update, setUpdate] = useState(false);

	const _isMounted = useRef(true);

	useEffect(() => {
		getAllSolicitudes()
			.then((data) => {
				if (_isMounted.current) {
					setData(data);
				}
			})
			.catch((error) => {
				console.info('No se pudo encontrar las solicitudes', error);
			});
	}, [Update]);

	useEffect(() => {
		return () => {
			_isMounted.current = false;
		};
	});
	return (
		<div className="charts__right">
			<div className="charts__right__title">
				<div>
					<p>Solicitudes Pendientes :</p>
				</div>
				<i className="fa fa-usd" aria-hidden="true"></i>
			</div>

			<div className="charts__right__cards">
				{Data ? (
					<>
						{Data.map((task, index) => (
							<CardTask task={task} key={task.s_id} setUpdate={setUpdate} />
						))}
					</>
				) : (
					<MiniSpinner />
				)}
			</div>
		</div>
	);
};

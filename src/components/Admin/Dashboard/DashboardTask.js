import React, { useEffect, useRef, useState } from 'react';
import { getAllSolicitudes } from '../../../helpers/Backend/Dashboard/getAllSolicitudes';
import { MiniSpinner } from '../../Tools/MiniSpinner';
import Swal from 'sweetalert2';
import { delSolicitud } from '../../../helpers/Backend/Dashboard/delSolicitud';

const CardTask = ({ task, setUpdate }) => {
	const DeleteTask = async (task_id) => {
		try {
			Swal.fire({
				title: 'Seguro de Eliminar esta Solicitud ?',
				text: '¡No podrás revertir esto! ',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Si,Confirmar!',
				cancelButtonText: 'Cancelar',
			}).then((result) => {
				if (result.isConfirmed) {
					delSolicitud(task_id)
						.then((response) => {
							if (response.ok) {
								setUpdate((stateValue) => !stateValue);
								Swal.fire(
									'Solicitud Eliminada',
									`Se elimino la solicitud :${task_id}`,
									'success'
								);
							} else {
								Swal.fire('Oopss', `Error con la solicitud :${task_id}`, 'error');
							}
						})
						.catch((error) => {
							Swal.fire('Oopss', `Error con la solicitud :${task_id}`, 'error');
							console.info('Error eliminar solicitud');
						});
				}
			});
		} catch (error) {
			Swal.fire('Oopss', `Error con la solicitud :${task_id}`, 'error');
			console.info('Error eliminar solicitud', error);
		}
	};

	const ShowMessageTask = () => {
		try {
			Swal.fire({
				title: `Solicitud Num: ${task.s_id}`,
				text: `Mensaje: ${task.s_query}`,
				footer: `Nombre: ${task.s_fullname}    Tel: ${task.s_cellphone} `,
				showConfirmButton: false,
			});
		} catch (error) {
			console.info('Error en ShowMessageTask', error);
		}
	};
	return (
		<div className="card1">
			<p className="txt_chartDelete">
				<b
					onClick={() => {
						DeleteTask(task.s_id);
					}}
				>
					Eliminar
				</b>
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
				<b onClick={ShowMessageTask}>Ver Mas</b>
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
	}, []);

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

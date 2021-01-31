import React, { useEffect, useState, useRef, useContext } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import moment from 'moment';
import { Spinner } from '../../Tools/Spinner';

import '../../../styles/Odontologo/Horarios/OdontologoHorario.css';
import { gellAllEventsDoctor } from '../../../helpers/Backend/getAllEventsDoctor';
import { AuthContext } from '../../../auth/AuthContext';

const localizer = momentLocalizer(moment);

const myEventsList = [
	{
		id: 1,
		title: 'Paciente Rita Ultima Revision',
		start: new Date(2021, 0, 7, 12, 35),
		end: new Date(2021, 0, 7, 13),
	},

	{
		id: 2,
		title: 'Luis colocacion de Brackets',
		start: new Date(2021, 0, 10, 19, 30),
		end: new Date(2021, 0, 10, 20),
	},

	{
		id: 3,
		title: 'Pedro,Hijo de Sr.Martin,Sacar brackets',
		start: new Date(2021, 0, 7, 9),
		end: new Date(2021, 0, 7, 10, 15),
	},

	{
		id: 4,
		title: 'Maria, limpieza URGENTE',
		start: new Date(2021, 0, 21),
		end: new Date(2021, 0, 21),
	},
	{
		id: 5,
		title: 'Conference',
		start: new Date(2021, 0, 23),
		end: new Date(2021, 0, 23),
		desc: 'Big conference for important people',
	},
	{
		id: 6,
		title: 'Meeting',
		start: new Date(2021, 0, 25),
		end: new Date(2021, 0, 25),
		desc: 'Pre-meeting meeting, to prepare for the meeting',
	},
	{
		id: 7,
		title: 'Lunch',
		start: new Date(2021, 0, 29),
		end: new Date(2021, 0, 29),
		desc: 'Power lunch',
	},
	{
		id: 8,
		title: 'Meeting',
		start: new Date(2021, 0, 5),
		end: new Date(2021, 0, 5),
	},
];

function Horario() {
	const { user, dispatch } = useContext(AuthContext);
	const [Events, setEvents] = useState(null);
	const _isMounted = useRef(true);

	useEffect(() => {
		gellAllEventsDoctor(user.d_id)
			.then((events) => {
				//Aqui antes Limpiarlos Fecha
				let myEventsList = events.map((evento, index) => {
					return {
						id: evento.c_id,
						title: evento.c_title,
						start: new Date(evento.c_start),
						end: new Date(evento.c_end),
					};
				});
				console.log(myEventsList);
				if (_isMounted.current) {
					setEvents(myEventsList);
				}
			})
			.catch((error) => {
				console.info('Error en Eventos del Paciente Calendario');
			});
		return () => {
			_isMounted.current = false;
		};
	}, []);

	return (
		<div id="horarioContenedor" className="horario-contenedor">
			<h1>Horario de Trabajo</h1>
			{Events ? (
				<Calendar
					localizer={localizer}
					events={Events}
					startAccessor="start"
					endAccessor="end"
				/>
			) : (
				<Spinner />
			)}
		</div>
	);
}

export default Horario;

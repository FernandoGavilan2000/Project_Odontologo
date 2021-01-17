import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es';
import moment from 'moment';

import '../../../styles/Odontologo/Horarios/OdontologoHorario.css';

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
	return (
		<div id="horarioContenedor" className="horario-contenedor">
			<h1>Horario de Trabajo</h1>
			<Calendar
				localizer={localizer}
				events={myEventsList}
				startAccessor="start"
				endAccessor="end"
			/>
		</div>
	);
}

export default Horario;

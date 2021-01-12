import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../../styles/Odontologo/Horarios/OdontologoHorario.css';

function Horario() {
	const [value, onChange] = useState(new Date());
	return (
		<div id="horarioContenedor" class="horario-contenedor">
			<h1>Aqui va el horario</h1>
			<Calendar onChange={onChange} value={value} className={['c1', 'c2']} />
		</div>
	);
}

export default Horario;

import React from 'react';

//Icon
import see from '../../../assets/images/see.svg';

import patientImage from '../../../assets/images/patient3.jpg';
import { Link } from 'react-router-dom';

function PacienteFila({ patient }) {
	return (
		<tr>
			{/* INFORMATION OF USERS */}
			<td className="columna-paciente">
				<img src={patient.p_img} alt="patientImage" />
				<h4>{`${patient.p_lastname} ${patient.p_name}`}</h4>
			</td>
			<td className="columna-edad">{patient.p_age} Años</td>
			<td className="columna-telefono">{patient.p_cellphone} </td>
			<td className="columna-visita">{patient.p_email} </td>
			<td className="columna-ver-perfil">
				<Link to={`/app/pacientes/${patient.p_id}`}>
					<img src={see} alt="see" />
					<span>Ver Perfil</span>
				</Link>
			</td>
		</tr>
	);
}

export default PacienteFila;

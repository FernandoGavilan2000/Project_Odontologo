import React from 'react';
import { NavLink } from 'react-router-dom';
import see from '../../../assets/images/see.svg';

import patientImage from '../../../assets/images/patient4.jpg';

export const InicioPacienteRow = () => {
	return (
		<tr>
			{/* INFORMATION OF USERS */}
			<td className="columna-paciente">
				<img src={patientImage} />
				<h4>Annette Black</h4>
			</td>

			<td className="columna-telefono">+51 933 15 94 54</td>

			<td className="columna-ver-perfil">
				<NavLink to="/app/pacientes/321">
					<img src={see} alt="see" />
					<span>Ver Perfil</span>
				</NavLink>
			</td>
		</tr>
	);
};

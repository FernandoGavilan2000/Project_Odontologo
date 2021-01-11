import React from 'react';

//Icon
import see from '../../../assets/images/see.svg';

import patientImage from '../../../assets/images/patient3.jpg';

function PacienteFila() {
	return (
		<tr>
			{/* INFORMATION OF USERS */}
			<td className="columna-paciente">
				<img src={patientImage} />
				<h4>Annette Black</h4>
			</td>
			<td className="columna-edad">33 Años</td>
			<td className="columna-telefono">+51 933 15 94 54</td>
			<td className="columna-visita">20/12/2020</td>
			<td className="columna-balance">s/. 390.00</td>
			<td className="columna-ver-perfil">
				<button>
					<img src={see} alt="see" />
					<span>Ver Perfil</span>
				</button>
			</td>
		</tr>
	);
}

export default PacienteFila;

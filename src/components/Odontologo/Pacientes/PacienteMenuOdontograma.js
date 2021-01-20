import React, { useState } from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuOdontograma.css';
import PacienteMenuOdontogramaFila from './PacienteMenuOdontogramaFila';

import { ArrayDiente } from '../../../helpers/Odontograma/ArrayDiente';
import { ArrayDiente2 } from '../../../helpers/Odontograma/ArrayDiente2';
import { ArrayDienteModelo } from '../../../helpers/Odontograma/ArrayDienteModelo';
import { Odontograma } from './Odontograma';

function PacienteMenuOdontograma() {
	const [ShowArray, setShowArray] = useState(ArrayDiente);

	const handleChangeArray = (newArray) => {
		setShowArray(newArray);
	};
	return (
		<div id="pacienteMenuOdontograma" className="paciente-menu-odontograma">
			<div className="odontograma-tabla-top">
				<h4>Lista</h4>
				<h4>Reciente Odontograma</h4>
			</div>
			<div className="odontograma-tabla-data">
				{/* Lista actualizaciones */}

				<div className="lista-actualizaciones contenedor-scroll">
					<PacienteMenuOdontogramaFila
						OdontogramaArray={ArrayDienteModelo}
						fecha={'NUEVO'}
						handleChangeArray={handleChangeArray}
					></PacienteMenuOdontogramaFila>
					<PacienteMenuOdontogramaFila
						OdontogramaArray={ArrayDiente}
						fecha={'20 de Enero'}
						handleChangeArray={handleChangeArray}
					></PacienteMenuOdontogramaFila>
					<PacienteMenuOdontogramaFila
						OdontogramaArray={ArrayDiente2}
						fecha={'21 de Enero'}
						handleChangeArray={handleChangeArray}
					></PacienteMenuOdontogramaFila>
				</div>

				<Odontograma ArrayDiente={ShowArray} />
			</div>
		</div>
	);
}

export default PacienteMenuOdontograma;

import React, { useEffect, useState, useRef } from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuOdontograma.css';
import PacienteMenuOdontogramaFila from './PacienteMenuOdontogramaFila';

//import { ArrayDiente } from '../../../helpers/Odontograma/ArrayDiente';
//import { ArrayDiente2 } from '../../../helpers/Odontograma/ArrayDiente2';
import { ArrayDienteModelo } from '../../../helpers/Odontograma/ArrayDienteModelo';
import { Odontograma } from './Odontograma';
import { getIDHistoria } from '../../../helpers/Backend/getIDHistoria';

function PacienteMenuOdontograma({ Patient }) {
	const [ShowArray, setShowArray] = useState(ArrayDienteModelo);
	const _isMounted = useRef(true);
	const [ListArray, setListArray] = useState(null);

	useEffect(() => {
		SearchOdontogramas(Patient)
			.then((data) => {
				if (_isMounted.current) {
					setListArray(data);
				}
			})
			.catch((error) => {
				console.info(`No hay Odontogramas del Paciente: ${Patient}`);
			});

		return () => {
			_isMounted.current = false;
		};
	}, [Patient]);

	const SearchOdontogramas = async (id_paciente) => {
		const HistoriaId = await getIDHistoria(id_paciente);
		const responseAPIOdontograma = await fetch(
			`${process.env.REACT_APP_API_URL}/api/odontogramas/${HistoriaId[0].hc_id}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
		);
		return await responseAPIOdontograma.json();
	};
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
						fecha={new Date()}
						handleChangeArray={handleChangeArray}
					></PacienteMenuOdontogramaFila>
					{ListArray
						? ListArray.map((odontograma, index) => (
								<PacienteMenuOdontogramaFila
									OdontogramaArray={JSON.parse(odontograma.o_teethcollection)}
									fecha={odontograma.o_datecapture}
									handleChangeArray={handleChangeArray}
									key={odontograma.o_datecapture}
								/>
						  ))
						: null}
				</div>

				<Odontograma ArrayDiente={ShowArray} />
			</div>
		</div>
	);
}

export default PacienteMenuOdontograma;

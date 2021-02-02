import React, { useEffect, useState, useRef } from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuOdontograma.css';
import PacienteMenuOdontogramaFila from './PacienteMenuOdontogramaFila';
//import Swal from 'sweetalert2';

//import { ArrayDiente } from '../../../helpers/Odontograma/ArrayDiente';
//import { ArrayDiente2 } from '../../../helpers/Odontograma/ArrayDiente2';
import { ArrayDienteModelo } from '../../../helpers/Odontograma/ArrayDienteModelo';
import { Odontograma } from './Odontograma';
import { getIDHistoria } from '../../../helpers/Backend/getIDHistoria';

function PacienteMenuOdontograma({ Patient }) {
	const [ShowArray, setShowArray] = useState(ArrayDienteModelo);
	const [ListArray, setListArray] = useState(null);
	const [Update, setUpdate] = useState(false);
	const [status, setStatus] = useState({
		type: 'new',
		idOdonto: 0,
	});
	const _isMounted = useRef(true);

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
	}, [Patient, Update]);

	useEffect(() => {
		return () => {
			_isMounted.current = false;
		};
	}, []);

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
						setStatus={setStatus}
						idOdonto={0}
						type="new"
					></PacienteMenuOdontogramaFila>
					{ListArray
						? ListArray.map((odontograma, index) => (
								<PacienteMenuOdontogramaFila
									OdontogramaArray={JSON.parse(odontograma.o_teethcollection)}
									fecha={odontograma.o_datecapture}
									handleChangeArray={handleChangeArray}
									key={odontograma.o_id}
									idOdonto={odontograma.o_id}
									setStatus={setStatus}
									type="registered"
								/>
						  ))
						: null}
				</div>

				<Odontograma
					ArrayDiente={ShowArray}
					Patient={Patient}
					status={status}
					setUpdate={setUpdate}
				/>
			</div>
		</div>
	);
}

export default PacienteMenuOdontograma;

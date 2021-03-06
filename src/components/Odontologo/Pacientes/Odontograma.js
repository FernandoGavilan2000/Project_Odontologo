import React, { useEffect, useState } from 'react';

//Numeros Barra en Memo
import { BarraNumerosSuperior } from './Odontograma/BarraNumerosSuperior';
import { BarraNumerosInferior } from './Odontograma/BarraNumerosInferior';

//Barra de Imagenes en Memo

import { BarraImagenesSuperior } from './Odontograma/BarraImagenesSuperior';
import { BarraImagenesInferior } from './Odontograma/BarraImagenesInferior';

//RadarDiente

import { OdontogramaContext } from './Odontograma/OdontogramaContext';
import { PrimerCuadranteRadar } from './Odontograma/PrimerCuadranteRadar';
import { SegundoCuadranteRadar } from './Odontograma/SegundoCuadranteRadar';
import { TercerCuadranteRadar } from './Odontograma/TercerCuadranteRadar';
import { CuartoCuadranteRadar } from './Odontograma/CuartoCuadranteRadar';
import { EstadosArray } from '../../../helpers/Odontograma/EstadosArray';
import { HallazgosArray } from '../../../helpers/Odontograma/HallazgosArray';
import { CarasDientesArray } from '../../../helpers/Odontograma/CarasDientesArray';
import { NewOdontograma } from '../../../helpers/Backend/NewOdontograma';
import { getIDHistoria } from '../../../helpers/Backend/getIDHistoria';
//EstadosDientes
import Swal from 'sweetalert2';
//import { useHistory } from 'react-router-dom';
import { UpdateOdonto } from '../../../helpers/Backend/UpdateOdonto';
//import { useCallback } from 'react';

export const Odontograma = ({ ArrayDiente, Patient, status, setUpdate }) => {
	const [DientesCollection, setDientesCollection] = useState(ArrayDiente);
	const [Diente, setDiente] = useState(ArrayDiente[0]);
	//const History = useHistory();
	/*
	console.log(DientesCollection);
	console.log(Diente);
	*/

	useEffect(() => {
		setDiente(
			DientesCollection[
				DientesCollection.findIndex((diente) => diente.numero === Diente.numero)
			]
		);
	}, [DientesCollection, Diente.numero]);

	const handleChangeEstado = (e) => {
		let nuevo = DientesCollection.filter((diente) => diente.numero !== Diente.numero);
		setDientesCollection([
			{
				id: Diente.id,
				numero: Diente.numero,
				cuadrante: Diente.cuadrante,
				nombre: Diente.nombre,
				estado: e.target.value,
				hallazgo: Diente.hallazgo,
				caras: Diente.caras,
			},
			...nuevo,
		]);
	};

	const handleChangeHallazgo = (e) => {
		let nuevo = DientesCollection.filter((diente) => diente.numero !== Diente.numero);
		setDientesCollection([
			{
				id: Diente.id,
				numero: Diente.numero,
				cuadrante: Diente.cuadrante,
				estado: Diente.estado,
				nombre: Diente.nombre,
				hallazgo: e.target.value,
				caras: Diente.caras,
			},
			...nuevo,
		]);
	};

	const handleChangeCara = (e) => {
		let nuevo = DientesCollection.filter((diente) => diente.numero !== Diente.numero);
		setDientesCollection([
			{
				id: Diente.id,
				numero: Diente.numero,
				cuadrante: Diente.cuadrante,
				estado: Diente.estado,
				nombre: Diente.nombre,
				hallazgo: Diente.hallazgo,
				caras: {
					Vestibular: Diente.caras.Vestibular,
					Oclusal: Diente.caras.Oclusal,
					Lingual: Diente.caras.Lingual,
					Mesial: Diente.caras.Mesial,
					Distal: Diente.caras.Distal,
					[e.target.name]: e.target.value,
				},
			},
			...nuevo,
		]);
	};

	//Efecto cuando ocurra un cambio dentro del Odontograma Actual

	useEffect(() => {
		setDientesCollection(ArrayDiente);
		setDiente(ArrayDiente[0]);
	}, [ArrayDiente]);

	const handleSubmit = async () => {
		Swal.fire({
			title: 'Guardando Odontograma',
			text: 'Por favor espere...',
			allowOutsideClick: false,
			showCancelButton: false,
			showConfirmButton: false,
			willOpen: () => {
				Swal.showLoading();
			},
		});

		getIDHistoria(Patient)
			.then((response) => {
				if (status.type === 'new') {
					NewOdontograma(response[0].hc_id, DientesCollection)
						.then((response) => {
							if (response.ok) {
								setUpdate((stateValue) => !stateValue);
								Swal.close();
								Swal.fire({
									icon: 'success',
									title: 'Nuevo Registro Guardado',
									text: 'Odontograma Guardado',
								});
							} else {
								Swal.close();
								console.error('No se pudo guardar el Odontograma');
							}
						})
						.catch((error) => {
							Swal.close();
							Swal.fire({
								icon: 'error',
								title: 'Oops...',
								text: 'No se pudo guardar el Odontograma!',
							});
						});
				} else {
					UpdateOdonto(status.idOdonto, response[0].hc_id, DientesCollection)
						.then((response) => {
							if (response.ok) {
								setUpdate((stateValue) => !stateValue);
								Swal.close();
								Swal.fire({
									icon: 'success',
									title: 'Registro Guardado',
									text: 'Odontograma Actualizado',
								});
							} else {
								Swal.close();
								console.error('No se pudo actualizar el Odontograma');
							}
						})
						.catch((error) => {
							Swal.close();
							Swal.fire({
								icon: 'error',
								title: 'Oops...',
								text: 'No se pudo guardar el Odontograma!',
							});
						});
				}
			})
			.catch((error) => {
				Swal.close();
				console.info('Error en conseguir el ID de la Historia');
			});
	};

	//Efecto cuando inserte nuevo Odontograma

	return (
		<OdontogramaContext.Provider value={{ setDiente, DientesCollection, Diente }}>
			<div className="odontograma-actual">
				<div className="odontograma-actual container-superior">
					<BarraNumerosSuperior key={'Barra1'} />

					<div className="odontograma-actual container-superior-options">
						{DientesCollection.filter((diente) => diente.cuadrante === 'Primer Cuadrante')
							.sort((a, b) => b.numero - a.numero)
							.map((diente, index) => (
								<PrimerCuadranteRadar key={diente.id} diente={diente} />
							))}
						{DientesCollection.filter(
							(diente) => diente.cuadrante === 'Segundo Cuadrante'
						)
							.sort((a, b) => a.numero - b.numero)
							.map((diente, index) => (
								<SegundoCuadranteRadar key={diente.id} diente={diente} />
							))}
					</div>
					<BarraImagenesSuperior handleDiente={setDiente} key={'Imagenes1'} />
				</div>
				<div className="odontograma-actual container-inferior">
					<BarraImagenesInferior handleDiente={setDiente} key={'Imagenes2'} />
					<div className="odontograma-actual container-inferior-options">
						{DientesCollection.filter((diente) => diente.cuadrante === 'Cuarto Cuadrante')
							.sort((a, b) => b.numero - a.numero)
							.map((diente, index) => (
								<CuartoCuadranteRadar key={diente.id} diente={diente} />
							))}
						{DientesCollection.filter((diente) => diente.cuadrante === 'Tercer Cuadrante')
							.sort((a, b) => a.numero - b.numero)
							.map((diente, index) => (
								<TercerCuadranteRadar key={diente.id} diente={diente} />
							))}
					</div>
					<BarraNumerosInferior key={'Barra2'} />
				</div>
				<div className="detalles-odontograma">
					<h2>DIENTE SELECCIONADO :</h2>
					<div className="odontograma_miniresults">
						<p>
							<b>Numero de Diente:</b> <span>{Diente.numero}</span>
						</p>
						<p>
							<b>Nombre del Diente:</b> <span>{Diente.nombre}</span>
						</p>
						<p>
							<b>Estado:</b>
							<select value={Diente.estado} onChange={handleChangeEstado}>
								{EstadosArray.map((estadoArray, index) => (
									<option value={estadoArray.name} key={estadoArray.name}>
										{estadoArray.name}
									</option>
								))}
							</select>
						</p>
					</div>
					<div className="odontograma_hallazgo">
						<h2>Hallazgo Clínico:</h2>
						<select value={Diente.hallazgo} onChange={handleChangeHallazgo}>
							{HallazgosArray.map((hallazgoArray, index) => (
								<option value={hallazgoArray.name} key={hallazgoArray.id}>
									{hallazgoArray.name}
								</option>
							))}
						</select>
					</div>

					<h2>Caras del Diente Seleccionado :</h2>

					<div className="odontograma_results">
						<div>
							<p>Vestibular:</p>
							<select
								value={Diente.caras.Vestibular}
								name="Vestibular"
								onChange={handleChangeCara}
							>
								{CarasDientesArray.map((carasArray, index) => (
									<option name="Vestibular" value={carasArray.name} key={carasArray.id}>
										{carasArray.name}
									</option>
								))}
							</select>
						</div>
						<div>
							<p>Oclusal: </p>
							<select
								value={Diente.caras.Oclusal}
								name="Oclusal"
								onChange={handleChangeCara}
							>
								{CarasDientesArray.map((carasArray, index) => (
									<option name="Oclusal" value={carasArray.name} key={carasArray.id}>
										{carasArray.name}
									</option>
								))}
							</select>
						</div>

						<div>
							<p>Lingual:</p>
							<select
								value={Diente.caras.Lingual}
								name="Lingual"
								onChange={handleChangeCara}
							>
								{CarasDientesArray.map((carasArray, index) => (
									<option name="Lingual" value={carasArray.name} key={carasArray.id}>
										{carasArray.name}
									</option>
								))}
							</select>
						</div>

						<div>
							<p>Mesial:</p>
							<select
								value={Diente.caras.Mesial}
								name="Mesial"
								onChange={handleChangeCara}
							>
								{CarasDientesArray.map((carasArray, index) => (
									<option name="Mesial" value={carasArray.name} key={carasArray.id}>
										{carasArray.name}
									</option>
								))}
							</select>
						</div>
						<div>
							<p>Distal:</p>
							<select
								value={Diente.caras.Distal}
								name="Distal"
								onChange={handleChangeCara}
							>
								{CarasDientesArray.map((carasArray, index) => (
									<option name="Distal" value={carasArray.name} key={carasArray.id}>
										{carasArray.name}
									</option>
								))}
							</select>
						</div>
					</div>

					<br />
					<button style={{ padding: '12px' }} onClick={handleSubmit}>
						Guardar Cambios
					</button>
				</div>
			</div>
		</OdontogramaContext.Provider>
	);
};

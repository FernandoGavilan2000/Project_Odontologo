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
//EstadosDientes

export const Odontograma = ({ ArrayDiente }) => {
	const [DientesCollection, setDientesCollection] = useState(ArrayDiente);
	const [Diente, setDiente] = useState(ArrayDiente[0]);
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

					<h2>Hallazgo Clínico:</h2>
					<select value={Diente.hallazgo} onChange={handleChangeHallazgo}>
						{HallazgosArray.map((hallazgoArray, index) => (
							<option value={hallazgoArray.name} key={hallazgoArray.id}>
								{hallazgoArray.name}
							</option>
						))}
					</select>

					<h2>Caras del Diente Seleccionado :</h2>

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
					<p>Oclusal: </p>
					<select value={Diente.caras.Oclusal} name="Oclusal" onChange={handleChangeCara}>
						{CarasDientesArray.map((carasArray, index) => (
							<option name="Oclusal" value={carasArray.name} key={carasArray.id}>
								{carasArray.name}
							</option>
						))}
					</select>

					<p>Lingual:</p>
					<select value={Diente.caras.Lingual} name="Lingual" onChange={handleChangeCara}>
						{CarasDientesArray.map((carasArray, index) => (
							<option name="Lingual" value={carasArray.name} key={carasArray.id}>
								{carasArray.name}
							</option>
						))}
					</select>
					<p>Mesial:</p>
					<select value={Diente.caras.Mesial} name="Mesial" onChange={handleChangeCara}>
						{CarasDientesArray.map((carasArray, index) => (
							<option name="Mesial" value={carasArray.name} key={carasArray.id}>
								{carasArray.name}
							</option>
						))}
					</select>
					<p>Distal:</p>
					<select value={Diente.caras.Distal} name="Distal" onChange={handleChangeCara}>
						{CarasDientesArray.map((carasArray, index) => (
							<option name="Distal" value={carasArray.name} key={carasArray.id}>
								{carasArray.name}
							</option>
						))}
					</select>

					<br />
					<button style={{ backgroundColor: 'lightblue', padding: '12px' }}>
						Guardar Cambios
					</button>
				</div>
			</div>
		</OdontogramaContext.Provider>
	);
};

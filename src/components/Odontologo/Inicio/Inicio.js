import React, { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import '../../../styles/Odontologo/Inicio/OdontologoInicio.css';
import see from '../../../assets/images/see.svg';
import { InicioPacienteRow } from './InicioPacienteRow';

import { FetchComunicados } from '../../../helpers/Firebase/FetchComunicados';
import { Spinner } from '../../Tools/Spinner';

function Inicio() {
	const [comunicados, setComunicados] = useState(null);
	const _isMounted = useRef(true);

	const fetchImages = async () => {
		try {
			let urls = await FetchComunicados();
			return urls;
		} catch (error) {
			console.error('Error con las imagenes en FireBase Pagina Inicio', error);
		}
	};

	useEffect(() => {
		fetchImages()
			.then((urls) => {
				if (_isMounted.current) {
					setComunicados(urls);
				}
			})
			.catch((error) => {
				console.log('Error con la funcion FetchImages', error);
			});
		return () => {
			_isMounted.current = false;
		};
	}, []);
	return (
		<div id="inicioContenedor" className="inicio-contenedor">
			<h1>
				Bienvenido : <span>Fernando</span>
			</h1>
			<br />
			<div className="title">
				<h2>Tus proximas citas :</h2>
				<button className="btn_showmore">
					<NavLink to="/app/horarios">
						<img src={see} alt="see" />
						<span>Ver Horario de Citas</span>
					</NavLink>
				</button>
			</div>
			<div className="patients-table">
				<table cellSpacing={0} cellPadding={0}>
					<thead>
						<tr>
							<th>PACIENTE</th>
							<th>TELEFONO</th>
							<th />
						</tr>
					</thead>
					<tbody>
						<InicioPacienteRow />
						<InicioPacienteRow />
						<InicioPacienteRow />
					</tbody>
				</table>
			</div>
			<br />
			<h2>Comunicados :</h2>

			{comunicados !== null ? (
				<div className="inicio-contenedor cards-container">
					{comunicados.map((imageurl, index) => (
						<div
							key={imageurl}
							alt={imageurl}
							style={{ backgroundImage: 'url(' + imageurl + ')' }}
							onClick={() => {
								window.open(imageurl);
							}}
						></div>
					))}
				</div>
			) : (
				<Spinner />
			)}
		</div>
	);
}

export default Inicio;

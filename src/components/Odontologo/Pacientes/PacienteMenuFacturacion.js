import React, { useState, useEffect, useRef } from 'react';
//import { useHistory } from 'react-router-dom';
import '../../../styles/Odontologo/Pacientes/PacienteMenuFacturacion.css';
import PacienteMenuFacturacionFila from './PacienteMenuFacturacionFila';
import { Spinner } from '../../Tools/Spinner';

function PacienteMenuFacturacion({ Patient }) {
	const [Facturas, setFacturas] = useState(null);
	const _isMounted = useRef(true);
	//const history = useHistory();

	useEffect(() => {
		SearchFacturas(Patient)
			.then((dataPacient) => {
				if (_isMounted.current) {
					setFacturas(dataPacient);
				}
			})
			.catch((error) => {
				console.info('No se pudo encontrar las Citas del Paciente', error);
			});

		return () => {
			_isMounted.current = false;
		};
	}, []);
	const SearchFacturas = async (id_paciente) => {
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/api/facturas/patient/${id_paciente}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
		);
		return await response.json();
	};

	return (
		<div id="pacienteMenuFacturacion" className="paciente-menu-facturacion">
			<div className="facturacion-tabla-top">
				<h4>COD Factura</h4>
				<h4>COD Tratamiento</h4>
				<h4 className="blue">Total a Pagar</h4>
				<h4 className="red">Pago Restante</h4>
				<h4>Estado</h4>
			</div>
			<div className="facturacion-tabla-datos contenedor-scroll">
				{Facturas ? (
					<>
						{Facturas.map((factura, index) => (
							<PacienteMenuFacturacionFila factura={factura} key={factura.f_id} />
						))}
					</>
				) : (
					<Spinner />
				)}
			</div>
		</div>
	);
}

export default PacienteMenuFacturacion;

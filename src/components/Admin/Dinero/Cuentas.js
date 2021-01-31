import React, { useState, useEffect, useRef } from 'react';
import '../../../styles/Admin/Cuentas.css';
import CuentasFila from './CuentasFila';
import { Spinner } from '../../Tools/Spinner';
import editar from '../../../assets/images/editar.svg';
import { getAllFacturas } from '../../../helpers/Backend/getAllFacturas';

export const Cuentas = () => {
	const [Facturas, setFacturas] = useState(null);
	const _isMounted = useRef(true);

	useEffect(() => {
		getAllFacturas()
			.then((dataDoctors) => {
				if (_isMounted.current) {
					setFacturas(dataDoctors);
				}
			})
			.catch((error) => {
				console.info('No se pudo encontrar los facturas-admin', error);
			});
	}, []);

	useEffect(() => {
		return () => {
			_isMounted.current = false;
		};
	});
	return (
		<div id="cuentasSeccion" className="cuentas-seccion">
			<h1>Resumen Facturas</h1>
			<div className="cuentas-tabla contenedor-scroll">
				<div className="cuentas-tabla-top">
					<h4>Cod. Factura</h4>
					<h4>Estado</h4>
					<h4>F. de Emision</h4>
					<h4>Total a pagar</h4>
					<h4 className="blue">Total Pagado</h4>
					<h4 className="red">Pago Restante</h4>
					<h4>Action</h4>
				</div>
				<div className="cuentas-tabla-datos">
					{Facturas ? (
						<>
							{Facturas.map((factura, index) => (
								<CuentasFila factura={factura} key={factura.f_id} />
							))}
						</>
					) : (
						<Spinner />
					)}
				</div>
			</div>
		</div>
	);
};

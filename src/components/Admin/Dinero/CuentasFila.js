import React from 'react';
import editar from '../../../assets/images/editar.svg';
import eliminar from '../../../assets/images/delete.svg';
import moment from 'moment';
import Swal from 'sweetalert2';
import 'moment/locale/es';
import { FacturaUpdate } from '../../../helpers/Alerts/FacturaUpdate';

function CuentasFila({ factura }) {
	const UpdateFactura = () => {
		FacturaUpdate(factura);
	};
	return (
		<div className="cuentas-fila">
			{/* COD FACTURA*/}
			<p>{factura.f_id}</p>

			{/* Status*/}
			<p>{factura.f_status}</p>

			{/* Fecha de Emision */}
			<p>{moment(factura.f_emission).local().format('LL')}</p>

			{/* Total a pagar */}
			<p>{factura.f_topay}</p>

			{/* Pago pagado */}
			<p>{factura.f_discharged}</p>

			{/* Pago faltante */}
			<p>{factura.f_total}</p>

			{/* Action */}
			<div className="options">
				<img src={eliminar} />
				<img src={editar} onClick={UpdateFactura} />
			</div>
		</div>
	);
}

export default CuentasFila;

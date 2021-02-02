import React from 'react';
import editar from '../../../assets/images/editar.svg';
import eliminar from '../../../assets/images/delete.svg';
import moment from 'moment';
import Swal from 'sweetalert2';
import 'moment/locale/es';
import { FacturaUpdate } from '../../../helpers/Alerts/FacturaUpdate';
import { UpdateFactura } from '../../../helpers/Backend/UpdateFactura';

function CuentasFila({ factura, setUpdate }) {
	const updateFact = async () => {
		try {
			const formFactura = await FacturaUpdate(factura);
			if (formFactura.isConfirmed) {
				UpdateFactura(
					factura.f_id,
					factura.f_tpid,
					factura.f_pid,
					factura.f_emission,
					formFactura.value[2],
					formFactura.value[0],
					formFactura.value[1],
					factura.f_did
				).then((response) => {
					if (response.ok) {
						setUpdate((stateValue) => !stateValue);
						console.log('OKKK');
					} else {
						console.log('errroo');
					}
				});
			} else {
			}
		} catch (error) {
			console.log(error);
			Swal.fire({
				icon: 'error',
				title: 'Oopsss',
				text: 'No se pudo actualizar la cuenta..',
			});
		}
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
				<img src={eliminar} alt="btn_delete" />
				<img src={editar} alt="btn_update" onClick={updateFact} />
			</div>
		</div>
	);
}

export default CuentasFila;

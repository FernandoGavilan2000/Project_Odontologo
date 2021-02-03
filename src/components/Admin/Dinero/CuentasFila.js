import React from 'react';
import editar from '../../../assets/images/editar.svg';
import eliminar from '../../../assets/images/delete.svg';
import moment from 'moment';
import Swal from 'sweetalert2';
import 'moment/locale/es';
import { FacturaUpdate } from '../../../helpers/Alerts/FacturaUpdate';
import { UpdateFactura } from '../../../helpers/Backend/UpdateFactura';
import { delFactura } from '../../../helpers/Backend/Dashboard/delFactura';
import { getPatientById } from '../../../helpers/Backend/getPatientById';
import { ShowPatient } from '../../../helpers/Alerts/ShowPatient';

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
						//console.log('OKKK');
					} else {
						Swal.fire({
							icon: 'error',
							title: 'Oopsss',
							text: 'No se pudo actualizar la cuenta..',
						});
						console.log('error actualizar la cuenta');
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

	const DeleteFactura = () => {
		try {
			Swal.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!',
			}).then((result) => {
				if (result.isConfirmed) {
					delFactura(factura.f_id)
						.then((response) => {
							if (response.ok) {
							}
						})
						.catch((error) => {
							Swal.fire({
								icon: 'error',
								title: 'Oopss',
								text: `Cuenta ${factura.f_id} no fue eliminada`,
							});
						});
				}
			});
		} catch (error) {
			Swal.fire({
				icon: 'error',
				title: 'Oopss',
				text: `Cuenta ${factura.f_id} no fue eliminada`,
			});
		}
	};
	const ShowPatientInfo = async () => {
		try {
			let patientData = await getPatientById(factura.f_pid);
			ShowPatient(patientData[0]);
		} catch (error) {
			console.info('Error en ShowPatient', error);
		}
	};
	return (
		<div className="cuentas-fila">
			{/* COD FACTURA*/}
			<p onClick={ShowPatientInfo}>{factura.f_id}</p>

			{/* Status*/}
			<p>{factura.f_status}</p>

			{/* Fecha de Emision */}
			<p>{moment(factura.f_emission).local().format('LL')}</p>

			{/* Total a pagar */}
			<p>s/ {factura.f_topay}</p>

			{/* Pago pagado */}
			<p>s/ {factura.f_discharged}</p>

			{/* Pago faltante */}
			<p>s/ {factura.f_total}</p>

			{/* Action */}
			<div className="options">
				<img src={eliminar} alt="btn_delete" onClick={DeleteFactura} />
				<img src={editar} alt="btn_update" onClick={updateFact} />
			</div>
		</div>
	);
}

export default CuentasFila;

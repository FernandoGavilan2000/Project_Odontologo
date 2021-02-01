import Swal from 'sweetalert2';
import '../../styles/Alerts/FacturaAlert.css';
import '../../styles/Admin/CuentaUpdate.css';

const FacturaOptions = (status) => {
	let optionsFactura = '';
	switch (status) {
		case 'Pendiente':
			optionsFactura = `<option  selected value="Pendiente">Pendiente</option> <option value="Cancelado">Cancelado</option> <option value="Anulado">Anulado</option>`;
			break;
		case 'Cancelado':
			optionsFactura = `<option value="Pendiente">Pendiente</option> <option value="Cancelado" selected>Cancelado</option> <option value="Anulado">Anulado</option>`;
			break;
		case 'Anulado':
			optionsFactura = `<option value="Pendiente">Pendiente</option> <option value="Cancelado">Cancelado</option> <option value="Anulado"  selected>Anulado</option>`;
			break;
		default:
			optionsFactura = `<option value="Pendiente">Pendiente</option> <option value="Cancelado">Cancelado</option> <option value="Anulado">Anulado</option>`;
			break;
	}
	return optionsFactura;
};

export const FacturaUpdate = async (factura) => {
	const peticionHtml = `<div">
<div>
    <span class="span_title">Total a Pagar : </span>
    <input class="input100" name="total_pay" type="number" min="1" step="1"  id="total_pay" autocomplete="off" value="${
			factura.f_topay
		}">
</div>

<div>
    <span class="span_title">Total Pagado :</span>
    <input class="input100" name="discharged" type="number" min="1" step="1"  id="discharged"  autocomplete="off" value="${
			factura.f_discharged
		}">
</div>
<div>
	<span class="span_title">Status :</span>
	<select  id="option_factura" class="select_status">
	${FacturaOptions(factura.f_status)}
	</select>
</div>
</div>`;
	return Swal.fire({
		title: `FACTURA ID: ${factura.f_id}`,
		width: '450px',
		showCancelButton: true,
		confirmButtonText: 'ACTUALIZAR',
		cancelButtonText: 'CANCELAR',
		confirmButtonColor: '#1d47cd',
		html: peticionHtml,
		focusConfirm: false,
		preConfirm: () => {
			return [
				document.getElementById('total_pay').value,
				document.getElementById('discharged').value,
				document.getElementById('option_factura').value,
			];
		},
	});
};

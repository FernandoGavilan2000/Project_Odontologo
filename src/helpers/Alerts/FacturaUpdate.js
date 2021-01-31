import Swal from 'sweetalert2';
import '../../styles/Alerts/FacturaAlert.css';

export const FacturaUpdate = async (factura) => {
	const peticionHtml = `<div">
<div>
    <span>Total a Pagar : </span>
    <input class="input100" type="text" name="total_pay"  id="total_pay" autocomplete="off" value="${factura.f_topay}">
</div>

<div>
    <span class="title_span">Total Pagado :</span>
    <input class="input100" type="text" name="discharged"  id="discharged"  autocomplete="off" value="${factura.f_discharged}">
</div>
</div>`;
	return Swal.fire({
		title: `FACTURA ID: ${factura.f_id}`,
		width: '450px',
		showCancelButton: true,
		confirmButtonText: 'ACTUALIZAR',
		cancelButtonText: 'CANCELAR',
		html: peticionHtml,
		focusConfirm: false,
		preConfirm: () => {
			return [
				document.getElementById('total_pay').value,
				document.getElementById('discharged').value,
			];
		},
	});
};

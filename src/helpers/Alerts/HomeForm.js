import Swal from 'sweetalert2';
import '../../styles/Alerts/HomeForm.css';

const peticionHtml = `<div class="contact100-form">
<div class="wrap-input100">
    <span class="label-input100">Nombre Completo :</span>
    <input class="input100" type="text" name="email"  id="swal-input1" placeholder="Ingrese su nombre..." autocomplete="off">
</div>

<div class="wrap-input100">
    <span class="label-input100">Teléfono de Contacto :</span>
    <input class="input100" type="text" name="email"  id="swal-input2" placeholder="+51 987 567 346" autocomplete="off">
</div>

<div class="wrap-input100 validate-input" data-validate = "Message is required">
    <span class="label-input100">Consulta/Observación: </span>
    <textarea class="input100" name="message" id="swal-input3"  placeholder="Describa aqui con mas detalles..." autocomplete="off" ></textarea>
</div>

</div>`;

export const AlertForm = () => {
	return Swal.fire({
		title: 'Complete el Formulario',
		width: '600px',
		showCancelButton: true,
		confirmButtonText: 'CONFIRMAR',
		cancelButtonText: 'CANCELAR',
		html: peticionHtml,
		focusConfirm: false,
		preConfirm: () => {
			return [
				document.getElementById('swal-input1').value,
				document.getElementById('swal-input2').value,
				document.getElementById('swal-input3').value,
			];
		},
	});
};

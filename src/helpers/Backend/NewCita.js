//import queryString from 'query-string';
import moment from 'moment';
import Swal from 'sweetalert2';
export const NewCita = async () => {
	return Swal.mixin({
		input: 'text',
		confirmButtonText: 'Next &rarr;',
		showCancelButton: true,
		progressSteps: ['1', '2', '3', '4', '5'],
	}).queue([
		{
			title: 'COD Tratamiento - Paciente',
			text: 'Inserte aqui el COD :',
		},
		{
			title: 'TITULO CITA',
			text: 'Escriba aqui el titulo:',
		},
		{
			title: 'Descripcion Cita',
			text: 'Escriba aqui su Comentario...',
		},
		{
			title: 'DIA Y HORA PROGRAMADA - INICIO ',
			text: 'Escriba aqui la Fecha :  DD-MM-YYYY',
			inputValue: `${moment().format('DD-MM-YYYY HH:mm:ss')}`,
		},
		{
			title: 'DIA Y HORA PROGRAMADA - FIN',
			text: 'Escriba aqui la Fecha : DD-MM-YYYY',
			inputValue: `${moment().format('DD-MM-YYYY HH:mm:ss')}`,
		},
	]);
};

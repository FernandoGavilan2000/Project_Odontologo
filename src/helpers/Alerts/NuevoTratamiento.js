import Swal from 'sweetalert2';
import moment from 'moment';

export const NuevoTratamiento = async () => {
	return Swal.mixin({
		input: 'text',
		confirmButtonText: 'Next &rarr;',
		showCancelButton: true,
		progressSteps: ['1', '2', '3', '4', '5'],
	}).queue([
		{
			title: 'ID Tipo de Tratamiento',
			text: 'Inserte aqui el ID :',
		},
		{
			title: 'Fecha de Inicio',
			text: 'Escriba aqui la Fecha :  DD-MM-YYYY',
			inputValue: `${moment().format('DD-MM-YYYY HH:mm:ss')}`,
		},
		{
			title: 'Fecha de Finalizacion',
			text: 'Escriba aqui la Fecha : DD-MM-YYYY',
			inputValue: `${moment().format('DD-MM-YYYY HH:mm:ss')}`,
		},
		{
			title: 'Numero de Citas Trazadas',
			text: 'Ingrese el numero :',
		},
		{
			title: 'Comentario',
			text: 'Escriba aqui su Comentario...',
		},
	]);
};

/*
.then((result) => {
    if (result.value) {
        const answers = JSON.stringify(result.value);
        Swal.fire({
            title: 'All done!',
            html: `
      Your answers:
      <pre><code>${answers}</code></pre>
    `,
            confirmButtonText: 'Lovely!',
        });
    }
});
*/

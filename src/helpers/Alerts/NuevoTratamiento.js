import Swal from 'sweetalert2';
let DateFormat = new Date();

export const NuevoTratamiento = async () => {
	return Swal.mixin({
		input: 'text',
		confirmButtonText: 'Next &rarr;',
		showCancelButton: true,
		progressSteps: ['1', '2', '3', '4', '5'],
	}).queue([
		{
			title: 'ID de Tratamiento',
			text: 'Inserte aqui el ID :',
		},
		{
			title: 'Fecha de Inicio',
			text: 'Escriba aqui la Fecha :  YY/MM/DD',
			inputValue: `${DateFormat.getFullYear()}-${
				DateFormat.getMonth() + 1
			}-${DateFormat.getDate()}`,
		},
		{
			title: 'Fecha de Finalizacion',
			text: 'Escriba aqui la Fecha : YY/MM/DD',
			inputValue: `${DateFormat.getFullYear()}-${
				DateFormat.getMonth() + 1
			}-${DateFormat.getDate()}`,
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

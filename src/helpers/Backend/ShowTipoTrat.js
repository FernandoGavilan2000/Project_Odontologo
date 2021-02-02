import Swal from 'sweetalert2';
export const ShowTipoTrat = async (id_tipo) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/api/tipos/${id_tipo}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
		);
		const data = await response.json();
		Swal.fire({
			title: `Nombre: ${data[0].t_name}`,
			text: `Descripción: ${data[0].t_description}`,
		});
	} catch (error) {
		console.info('Error, con la funcion ShowTipoTrat', error);
	}
};

import Swal from 'sweetalert2';
export const ShowDoctor = async (id_doctor) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/api/doctores/${id_doctor}`,
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
			title: `Dr. ${data[0].d_lastname} ${data[0].d_name}`,
			text: `Email: ${data[0].d_email}`,
			imageUrl: `${data[0].d_img}`,
			imageWidth: 220,
			imageAlt: 'Doctor-Imagen',
			showConfirmButton: false,
		});
	} catch (error) {
		console.info('Error, con la funcion ShowDoctor', error);
	}
};

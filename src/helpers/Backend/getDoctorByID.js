export const getDoctorByID = async (id_doctor) => {
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
		return data;
	} catch (error) {
		console.info('Error, con la funcion ShowDoctor', error);
	}
};

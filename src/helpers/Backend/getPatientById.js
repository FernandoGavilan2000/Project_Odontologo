export const getPatientById = async (id_patient) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/api/pacientes/${id_patient}`,
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
		console.info('Error, con la funcion getPatientById', error);
		return error;
	}
};

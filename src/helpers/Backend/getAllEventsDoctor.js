export const gellAllEventsDoctor = async (id_doctor) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/api/citas/doctor/${id_doctor}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
		);
		return await response.json();
	} catch (error) {
		console.info('Error, con la funcion getAllEventsDoctor', error);
	}
};

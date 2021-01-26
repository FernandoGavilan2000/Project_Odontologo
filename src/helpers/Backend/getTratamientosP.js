export const getTratamientosP = async (id_patient) => {
	const response = await fetch(
		`${process.env.REACT_APP_API_URL}/api/tratamientos/patient/${id_patient}`,
		{
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		}
	);
	return await response.json();
};

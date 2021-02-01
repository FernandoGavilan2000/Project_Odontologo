export const getCountDoctors = async () => {
	const response = await fetch(`${process.env.REACT_APP_API_URL}/api/doctores/n`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});
	return await response.json();
};

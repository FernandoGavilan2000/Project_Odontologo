export const getCountTratamientos = async () => {
	const response = await fetch(`${process.env.REACT_APP_API_URL}/api/tratamientos/n`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});
	return await response.json();
};

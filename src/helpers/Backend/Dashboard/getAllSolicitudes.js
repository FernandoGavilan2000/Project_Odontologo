export const getAllSolicitudes = async () => {
	const response = await fetch(`${process.env.REACT_APP_API_URL}/api/solicitudes`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
	});
	return await response.json();
};

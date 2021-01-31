export const getAllFacturas = async () => {
	try {
		const response = await fetch(`${process.env.REACT_APP_API_URL}/api/facturas/`, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		});
		return await response.json();
	} catch (error) {
		console.info('Error, con la funcion getAllFacturas', error);
	}
};

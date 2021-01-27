export const getIDHistoria = async (id_paciente) => {
	try {
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/api/historias/${id_paciente}`,
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
		console.info('Error, con la funcion get HistoriaByID', error);
	}
};

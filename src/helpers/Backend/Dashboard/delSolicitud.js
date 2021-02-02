export const delSolicitud = async (id_solicitud) => {
	const response = await fetch(
		`${process.env.REACT_APP_API_URL}/api/solicitudes/${id_solicitud}`,
		{
			method: 'DELETE',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		}
	);
	return response;
};

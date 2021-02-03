export const delFactura = async (id_factura) => {
	const response = await fetch(
		`${process.env.REACT_APP_API_URL}/api/facturas/${id_factura}`,
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

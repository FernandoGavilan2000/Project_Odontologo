import queryString from 'query-string';
export const UpdateFactura = async (
	id_factura,
	f_tipoT,
	f_patient,
	f_emiss,
	f_statu,
	f_cost,
	f_disch,
	doctorid
) => {
	try {
		let costoTotal = parseFloat(f_cost);
		let dischar = parseFloat(f_disch);
		let summary = parseFloat(costoTotal - dischar);
		/*
		let textStatus = 'Pendiente';
		if (summary === 0) {
			textStatus = 'Cancelado';
		}
		*/
		const ResponseAPIFact = await fetch(
			`${process.env.REACT_APP_API_URL}/api/facturas/${id_factura}`,
			{
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: queryString.stringify({
					f_tpid: f_tipoT,
					f_pid: f_patient,
					f_did: doctorid,
					f_emission: f_emiss,
					f_status: f_statu,
					f_topay: costoTotal,
					f_discharged: dischar,
					f_total: summary,
				}),
			}
		);
		return ResponseAPIFact;
	} catch (error) {
		console.info('Error, con la funcion UpdateFactura', error);
		return error;
	}
};

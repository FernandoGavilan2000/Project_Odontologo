import queryString from 'query-string';
export const UpdateFactura = async (
	id_factura,
	f_tipoT,
	f_patient,
	f_emiss,
	f_statu,
	f_cost,
	f_disch,
	f_summary
) => {
	try {
		const ResponseAPIFact = await fetch(
			`${process.env.REACT_APP_API_URL}/api/facturas/${id_factura}`,
			{
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: queryString.stringify({
					f_tpid,
					f_pid,
					f_did,
					f_emission,
					f_status,
					f_topay,
					f_discharged,
					f_total,
				}),
			}
		);
		return ResponseAPIFact;
	} catch (error) {
		console.info('Error, con la funcion UpdateFactura', error);
	}
};

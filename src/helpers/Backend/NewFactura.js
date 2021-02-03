import queryString from 'query-string';
import moment from 'moment';
export const NewFactura = async (id_trat, id_paciente, id_doctor, cod_tipo) => {
	//Conseguir el Precio del Tratamiento
	const ResponseAPITrat = await fetch(
		`${process.env.REACT_APP_API_URL}/api/tipos/${cod_tipo}`,
		{
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		}
	);
	const CostTratamiento = await ResponseAPITrat.json();

	//const DateFormat = new Date();
	const ResponseAPIFact = await fetch(`${process.env.REACT_APP_API_URL}/api/facturas/`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		body: queryString.stringify({
			f_tpid: id_trat,
			f_pid: id_paciente,
			f_did: id_doctor,
			f_emission: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
			f_status: 'Pendiente',
			f_topay: CostTratamiento[0].t_price,
			f_discharged: 0,
			f_total: CostTratamiento[0].t_price,
		}),
	});
	//console.log('Aqui', ResponseAPIFact);
	return ResponseAPIFact;
};

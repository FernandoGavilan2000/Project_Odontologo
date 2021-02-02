import queryString from 'query-string';
import moment from 'moment';

export const NewTratamiento = async (
	id_doctor,
	id_paciente,
	id_trat,
	date_start,
	date_end,
	ncitas,
	comment
) => {
	//Crear Nuevo Tratamiento
	try {
		const ResponseAPITrat = await fetch(
			`${process.env.REACT_APP_API_URL}/api/tratamientos/`,
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: queryString.stringify({
					tp_pid: id_paciente,
					tp_tid: id_trat,
					tp_did: id_doctor,
					tp_description: comment,
					tp_start: moment(date_start, 'DD.MM.YYYY HH:mm:ss').format(
						'YYYY-MM-DD HH:mm:ss'
					),
					tp_end: moment(date_end, 'DD.MM.YYYY HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'),
					tp_ndates: ncitas,
				}),
			}
		);
		const { insertId } = await ResponseAPITrat.json();
		return insertId;
	} catch (error) {
		return error;
	}
};

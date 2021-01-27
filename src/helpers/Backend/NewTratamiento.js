import queryString from 'query-string';

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
					tp_start: date_start,
					tp_end: date_end,
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

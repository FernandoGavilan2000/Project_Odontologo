import queryString from 'query-string';
import moment from 'moment';
export const CreateNewCita = async (
	trat_id,
	cod_paciente,
	cod_doctor,
	title_cita,
	descript_cita,
	cita_start,
	cita_end
) => {
	//Crear Nuevo Tratamiento
	try {
		const ResponseAPINewCita = await fetch(
			`${process.env.REACT_APP_API_URL}/api/citas/`,
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: queryString.stringify({
					c_did: cod_doctor,
					c_pid: cod_paciente,
					c_tpid: trat_id,
					c_title: title_cita,
					c_description: descript_cita,
					c_start: moment(cita_start, 'DD.MM.YYYY HH:mm:ss').format(
						'YYYY-MM-DD HH:mm:ss'
					),
					c_end: moment(cita_end, 'DD.MM.YYYY HH:mm:ss').format('YYYY-MM-DD HH:mm:ss'),
					c_status: 'Pendiente',
				}),
			}
		);
		return ResponseAPINewCita;
	} catch (error) {
		console.info('Error con la Creacion de una Nueva Cita', error);
	}
};

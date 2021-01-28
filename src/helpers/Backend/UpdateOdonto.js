import queryString from 'query-string';
import moment from 'moment';
export const UpdateOdonto = async (id_odontograma, historia_id, odontograma) => {
	try {
		const ResponseAPIFact = await fetch(
			`${process.env.REACT_APP_API_URL}/api/odontogramas/${id_odontograma}`,
			{
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: queryString.stringify({
					o_hc: historia_id,
					o_datecapture: moment(new Date()).format('YYYY-MM-DD HH:mm:ss'),
					o_teethcollection: JSON.stringify(odontograma),
					o_remark: '',
				}),
			}
		);
		return ResponseAPIFact;
	} catch (error) {
		console.info('Error, con la funcion UpdateOdontograma', error);
	}
};

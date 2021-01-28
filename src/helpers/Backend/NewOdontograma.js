import queryString from 'query-string';
import moment from 'moment';
export const NewOdontograma = async (historia_id, odontograma) => {
	try {
		const ResponseAPIFact = await fetch(
			`${process.env.REACT_APP_API_URL}/api/odontogramas/`,
			{
				method: 'POST',
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
		console.info('Error, con la funcion NewOdontograma', error);
	}
};

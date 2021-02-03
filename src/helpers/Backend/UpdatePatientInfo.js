import queryString from 'query-string';
import moment from 'moment';
export const UpdatePatientInfo = async (
	id_patient,
	{
		p_name,
		p_lastname,
		p_gender,
		p_allergy,
		p_birthday,
		p_dni,
		p_address,
		p_cellphone,
		p_img,
		p_email,
		p_age,
		p_weight,
		p_height,
	}
) => {
	try {
		//console.log(p_address, p_cellphone, p_allergy, p_birthday);
		const ResponseAPIFact = await fetch(
			`${process.env.REACT_APP_API_URL}/api/pacientes/${id_patient}`,
			{
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: queryString.stringify({
					p_name: p_name,
					p_lastname: p_lastname,
					p_birthday: moment(p_birthday).utc().format('YYYY-MM-DD'),
					p_gender: p_gender,
					p_img: p_img,
					p_dni: p_dni,
					p_address: p_address,
					p_cellphone: p_cellphone,
					p_email: p_email,
					p_weight: parseFloat(p_weight),
					p_height: parseFloat(p_height),
					p_allergy: p_allergy,
					p_age: parseInt(p_age),
				}),
			}
		);
		return ResponseAPIFact;
	} catch (error) {
		console.info('Error, con la funcion UpdatePatientInfo', error);
		return error;
	}
};

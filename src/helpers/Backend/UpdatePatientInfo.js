import queryString from 'query-string';
import moment from 'moment';
export const UpdatePatientInfo = async (
	id_patient,
	{
		name,
		lastname,
		gender,
		allergy,
		birthday,
		dni,
		address,
		cellphone,
		img,
		email,
		age,
		weight,
		height,
	}
) => {
	try {
		const ResponseAPIFact = await fetch(
			`${process.env.REACT_APP_API_URL}/api/pacientes/${id_patient}`,
			{
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: queryString.stringify({
					p_name: name,
					p_lastname: lastname,
					p_birthday: moment(birthday, 'DD.MM.YYYY HH:mm:ss').format(
						'YYYY-MM-DD HH:mm:ss'
					),
					p_gender: gender,
					p_img: img,
					p_dni: dni,
					p_address: address,
					p_cellphone: cellphone,
					p_email: email,
					p_weight: parseFloat(weight),
					p_height: parseFloat(height),
					p_allergy: allergy,
					p_age: parseInt(age),
				}),
			}
		);
		return ResponseAPIFact;
	} catch (error) {
		console.info('Error, con la funcion UpdatePatientInfo', error);
	}
};

import queryString from 'query-string';

export const UpdateOdontologo = async (
	id_doctor,
	{
		d_name,
		d_lastname,
		d_gender,
		d_branch,
		d_dni,
		d_email,
		d_img,
		d_npatients,
		d_cellphone,
		d_portfolio,
		d_codecollege,
	}
) => {
	try {
		//console.log(p_address, p_cellphone, p_allergy, p_birthday);
		const ResponseAPIFact = await fetch(
			`${process.env.REACT_APP_API_URL}/api/doctores/${id_doctor}`,
			{
				method: 'PUT',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: queryString.stringify({
					d_img: d_img,
					d_portfolio: d_portfolio,
					d_name: d_name,
					d_lastname: d_lastname,
					d_email: d_email,
					d_cellphone: d_cellphone,
					d_gender: d_gender,
					d_dni: d_dni,
					d_branch: d_branch,
					d_npatients: d_npatients,
					d_codecollege: d_codecollege,
				}),
			}
		);
		return ResponseAPIFact;
	} catch (error) {
		console.info('Error, con la funcion UpdateOdontologoInfo', error);
		return error;
	}
};

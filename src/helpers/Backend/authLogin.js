import queryString from 'query-string';
import { getAdminByID } from './getAdminByID';
import { getDoctorByID } from './getDoctorByID';

export const authLogin = async (nickname_user, password_user) => {
	try {
		const ResponseAPILogin = await fetch(
			`${process.env.REACT_APP_API_URL}/api/auth/signin`,
			{
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: queryString.stringify({
					auth_user: nickname_user,
					auth_password: password_user,
				}),
			}
		);

		if (ResponseAPILogin.ok) {
			const datosUser = await ResponseAPILogin.json();

			let user = null;

			if (datosUser[0].auth_type === 'doctor') {
				//Lamado al doctor
				const dataDoctor = await getDoctorByID(datosUser[0].auth_id);
				user = {
					type: 'odontologo',
					d_id: dataDoctor[0].d_id,
					d_name: dataDoctor[0].d_name,
					d_lastname: dataDoctor[0].d_lastname,
					d_img: dataDoctor[0].d_img,
					logged: true,
				};
			} else {
				//Llamado al admin
				const dataAdmin = await getAdminByID(datosUser[0].auth_id);
				user = {
					type: 'admin',
					a_id: dataAdmin[0].a_id,
					a_name: dataAdmin[0].a_name,
					a_lastname: dataAdmin[0].a_lastname,
					logged: true,
				};
			}
			return user;
		}
	} catch (error) {
		console.info('Error, con la funcion NewOdontograma', error);
		return error;
	}
};

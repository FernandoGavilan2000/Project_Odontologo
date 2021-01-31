import queryString from 'query-string';

export const NewSolicitud = async (name, cellphone, info) => {
	const ResponseAPIFact = await fetch(
		`${process.env.REACT_APP_API_URL}/api/solicitudes/`,
		{
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: queryString.stringify({
				s_fullname: name,
				s_cellphone: cellphone,
				s_query: info,
			}),
		}
	);
	return ResponseAPIFact;
};

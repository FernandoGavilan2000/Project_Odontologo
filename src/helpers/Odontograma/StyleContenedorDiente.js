export const StyeleContenedorDiente = (hallazgo) => {
	let classDiente = 'hallazgo_default';
	switch (hallazgo.toLowerCase()) {
		case 'movilidad':
			classDiente = 'hallazgo_movilidad';
			break;
		case 'corona definitiva':
			classDiente = 'hallazgo_corona_definitiva';
			break;
		case 'corona temporal':
			classDiente = 'hallazgo_corona_temporal';
			break;
		case 'fractura':
			classDiente = 'hallazgo_fractura';
			break;
		case 'macrodiente':
			classDiente = 'hallazgo_macrodiente';
			break;
		case 'microdiente':
			classDiente = 'hallazgo_microdiente';
			break;
		case 'giroversión':
			classDiente = 'hallazgo_giroversión';
			break;
		case 'ectópico':
			classDiente = 'hallazgo_ectópico';
			break;
		case 'implante':
			classDiente = 'hallazgo_implante';
			break;
		case 'ausente':
			classDiente = 'hallazgo_ausente';
			break;
		default:
			classDiente = 'hallazgo_default';
			break;
	}
	return classDiente;
};

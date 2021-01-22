export const StyleCaraDiente = (cara_diente) => {
	let classCara = 'cara_default';
	switch (cara_diente) {
		case 'caries':
			classCara = 'cara_caries';
			break;
		case 'restauración en buen estado':
			classCara = 'cara_restauración';
			break;
		case 'restauración deficiente':
			classCara = 'cara_restauración_deficiente';
			break;
		default:
			classCara = 'cara_default';
			break;
	}
	return classCara;
};

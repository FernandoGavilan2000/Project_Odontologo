import { getIDHistoria } from './getIDHistoria';

export const getAnamnesis = async (id_patient) => {
	try {
		const data = await getIDHistoria(id_patient);
		const Anamnesis = data[0].hc_amnamesis;
		return Anamnesis;
	} catch (error) {
		console.info('Error para conseguir el Anamnesis');
	}
};

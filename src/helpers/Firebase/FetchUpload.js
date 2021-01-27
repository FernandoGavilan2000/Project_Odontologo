import { storage } from '../../firebase/config';

export const FetchUpload = async (PathRef, file) => {
	try {
		let date = new Date();
		let refImage = storage.ref(
			`${PathRef}+${file.name}+${
				(date.getDate(),
				date.getMonth(),
				date.getFullYear(),
				date.getHours(),
				date.getMinutes(),
				date.getSeconds(),
				date.getMilliseconds())
			}`
		); //Ojo aqui antes coloque un let respuesta= await refImage.put...
		await refImage.put(file);
		return refImage.getDownloadURL();
	} catch (error) {
		console.error('No se pudo subir la Imagen', error);
	}

	/*
	task.on(
		'state_changed',
		function progress(snapshot) {
			let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			console.info(percentage);
		},
		function fail(error) {
			console.error('Error al intentar subir la nueva foto de perfil', error);
		},
		function completed() {
			console.info('Nueva Imagen de Perfil en Firebase');
			const newUrl = refImage.getDownloadURL;
			return newUrl;
		}
    );
    */
};

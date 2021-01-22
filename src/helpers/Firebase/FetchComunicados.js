import { storage } from '../../firebase/config';

const ListLocation = async () => {
	try {
		let response = await storage.ref('/comunicados').list();
		let arrayimages = response._delegate.items;
		let pathsImages = arrayimages.map((element, index) => ({
			numero: index,
			path: element._location.path_,
		}));
		return pathsImages;
		//console.log(response._delegate.items[0]._location.path_);
	} catch (error) {
		console.error('No se pudo encontrar la carpeta --comunicados-- ', error);
	}
};

export const FetchComunicados = async () => {
	try {
		const ListPaths = await ListLocation();
		let results = await Promise.all(
			ListPaths.map((location, index) =>
				storage
					.ref(location.path)
					.getDownloadURL()
					.then((result) => result)
			)
		);
		return results;
	} catch (error) {
		console.error('Error al hacer Fetch con las imagenes', error);
	}
};

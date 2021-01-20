import React, { useContext, useEffect } from 'react';
import { StyleCaraDiente } from '../../../../helpers/Odontograma/StyleCaraDiente';
import { StyeleContenedorDiente } from '../../../../helpers/Odontograma/StyleContenedorDiente';

import { OdontogramaContext } from './OdontogramaContext';

export const PrimerCuadranteRadar = ({ diente }) => {
	const { DientesCollection, Diente } = useContext(OdontogramaContext);

	/*
	let classDiente = StyeleContenedorDiente(DientesCollection[index].hallazgo);
	let caraVestibular = StyleCaraDiente(DientesCollection[index].caras.Vestibular);
	let caraOclusal = StyleCaraDiente(DientesCollection[index].caras.Oclusal);
	let caraLingual = StyleCaraDiente(DientesCollection[index].caras.Lingual);
	let caraMesial = StyleCaraDiente(DientesCollection[index].caras.Mesial);
	let caraDistal = StyleCaraDiente(DientesCollection[index].caras.Distal);
	*/
	let classDiente = StyeleContenedorDiente(diente.hallazgo);
	let caraVestibular = StyleCaraDiente(diente.caras.Vestibular);
	let caraOclusal = StyleCaraDiente(diente.caras.Oclusal);
	let caraLingual = StyleCaraDiente(diente.caras.Lingual);
	let caraMesial = StyleCaraDiente(diente.caras.Mesial);
	let caraDistal = StyleCaraDiente(diente.caras.Distal);

	/*
	let classDiente = StyeleContenedorDiente(hallazgo);
	let caraVestibular = StyleCaraDiente(caras.Vestibular);
	let caraOclusal = StyleCaraDiente(caras.Oclusal);
	let caraLingual = StyleCaraDiente(caras.Lingual);
	let caraMesial = StyleCaraDiente(caras.Mesial);
	let caraDistal = StyleCaraDiente(caras.Distal);
	*/
	return (
		<ul className={`menu ${classDiente}`}>
			<li className={`${caraVestibular}`}>
				<div>
					<span></span>
				</div>
			</li>
			<li className={`${caraMesial}`}>
				<div>
					<span></span>
				</div>
			</li>
			<li className={`${caraDistal}`}>
				<div>
					<span></span>
				</div>
			</li>
			<li className={`${caraLingual}`}>
				<div>
					<span></span>
				</div>
			</li>
			<li className={`${caraOclusal}`}>
				<div>
					<span></span>
				</div>
			</li>
		</ul>
	);
};

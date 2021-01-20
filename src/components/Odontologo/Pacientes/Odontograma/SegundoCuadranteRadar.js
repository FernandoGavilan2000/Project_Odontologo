import React from 'react';
import { StyleCaraDiente } from '../../../../helpers/Odontograma/StyleCaraDiente';
import { StyeleContenedorDiente } from '../../../../helpers/Odontograma/StyleContenedorDiente';

export const SegundoCuadranteRadar = ({ diente }) => {
	let classDiente = StyeleContenedorDiente(diente.hallazgo);
	let caraVestibular = StyleCaraDiente(diente.caras.Vestibular);
	let caraOclusal = StyleCaraDiente(diente.caras.Oclusal);
	let caraLingual = StyleCaraDiente(diente.caras.Lingual);
	let caraMesial = StyleCaraDiente(diente.caras.Mesial);
	let caraDistal = StyleCaraDiente(diente.caras.Distal);

	return (
		<ul className={`menu ${classDiente}`}>
			<li className={`${caraVestibular}`}>
				<div>
					<span></span>
				</div>
			</li>
			<li className={`${caraDistal}`}>
				<div>
					<span></span>
				</div>
			</li>
			<li className={`${caraMesial}`}>
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

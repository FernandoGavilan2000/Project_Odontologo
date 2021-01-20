import React from 'react';
import { StyleCaraDiente } from '../../../../helpers/Odontograma/StyleCaraDiente';
import { StyeleContenedorDiente } from '../../../../helpers/Odontograma/StyleContenedorDiente';

export const SegundoCuadranteRadar = ({ hallazgo, caras }) => {
	let classDiente = StyeleContenedorDiente(hallazgo);
	let caraVestibular = StyleCaraDiente(caras.Vestibular);
	let caraOclusal = StyleCaraDiente(caras.Oclusal);
	let caraLingual = StyleCaraDiente(caras.Lingual);
	let caraMesial = StyleCaraDiente(caras.Mesial);
	let caraDistal = StyleCaraDiente(caras.Distal);

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

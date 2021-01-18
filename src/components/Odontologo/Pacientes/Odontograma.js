import React from 'react';

//Numeros Barra en Memo
import { BarraNumerosSuperior } from './Odontograma/BarraNumerosSuperior';
import { BarraNumerosInferior } from './Odontograma/BarraNumerosInferior';

//Barra de Imagenes en Memo

import { BarraImagenesSuperior } from './Odontograma/BarraImagenesSuperior';
import { BarraImagenesInferior } from './Odontograma/BarraImagenesInferior';

//RadarDiente

import { RadarDiente } from './Odontograma/RadarDiente';

export const Odontograma = ({ ArrayDiente }) => {
	const DientesSuperiores = ArrayDiente.slice(0, 16);
	const DientesInferiores = ArrayDiente.slice(16);

	return (
		<div className="odontograma-actual">
			<div className="odontograma-actual container-superior">
				<BarraNumerosSuperior />
				<div className="odontograma-actual container-superior-options">
					{DientesSuperiores.map((diente, index) => (
						<RadarDiente />
					))}
				</div>
				<BarraImagenesSuperior />
			</div>
			<div className="odontograma-actual container-inferior">
				<BarraImagenesInferior />
				<div className="odontograma-actual container-inferior-options">
					{DientesInferiores.map((diente, index) => (
						<RadarDiente />
					))}
				</div>
				<BarraNumerosInferior />
			</div>

			<h3>INFO DEL DIENTE SELECCIONADO</h3>
			<p>
				Numero de Diente: <span>18</span>
			</p>
			<p>
				Nombre del Diente: <span>Tercera Molar</span>
			</p>
			<p>
				Estado: <span>1.Presente en Boca 2.Proceso de Erupcion 3. No Registra</span>
			</p>
			<p>
				Hallazgo Clínico: <span>Caries,Obt</span>
			</p>
			<p>
				Vestibular: <span></span>
			</p>
			<p>
				Oclusal: <span></span>
			</p>
			<p>
				Lingual: <span></span>
			</p>
			<p>
				Mesial: <span>Caries</span>
			</p>
			<p>
				Distal: <span></span>
			</p>
		</div>
	);
};

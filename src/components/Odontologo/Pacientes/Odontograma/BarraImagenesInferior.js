import React, { useContext } from 'react';

import num48 from '../../../../assets/odontograma/48.png';
import num47 from '../../../../assets/odontograma/47.png';
import num46 from '../../../../assets/odontograma/46.png';
import num45 from '../../../../assets/odontograma/45.png';
import num44 from '../../../../assets/odontograma/44.png';
import num43 from '../../../../assets/odontograma/43.png';
import num42 from '../../../../assets/odontograma/42.png';
import num41 from '../../../../assets/odontograma/41.png';
import num31 from '../../../../assets/odontograma/31.png';
import num32 from '../../../../assets/odontograma/32.png';
import num33 from '../../../../assets/odontograma/33.png';
import num34 from '../../../../assets/odontograma/34.png';
import num35 from '../../../../assets/odontograma/35.png';
import num36 from '../../../../assets/odontograma/36.png';
import num37 from '../../../../assets/odontograma/37.png';
import num38 from '../../../../assets/odontograma/38.png';

import { OdontogramaContext } from './OdontogramaContext';

export const BarraImagenesInferior = () => {
	const { setDiente, DientesCollection } = useContext(OdontogramaContext);
	return (
		<div className="odontograma-actual container-inferior-images">
			<div
				style={{ backgroundImage: 'url(' + num48 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 48)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num47 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 47)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num46 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 46)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num45 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 45)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num44 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 44)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num43 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 43)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num42 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 42)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num41 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 41)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num31 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 31)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num32 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 32)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num33 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 33)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num34 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 34)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num35 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 35)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num36 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 36)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num37 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 37)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num38 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 38)
						]
					);
				}}
			></div>
		</div>
	);
};

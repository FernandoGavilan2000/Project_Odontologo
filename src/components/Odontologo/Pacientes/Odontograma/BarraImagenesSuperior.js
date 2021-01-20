import React, { useContext } from 'react';

import num18 from '../../../../assets/odontograma/18.png';
import num17 from '../../../../assets/odontograma/17.png';
import num16 from '../../../../assets/odontograma/16.png';
import num15 from '../../../../assets/odontograma/15.png';
import num14 from '../../../../assets/odontograma/14.png';
import num13 from '../../../../assets/odontograma/13.png';
import num12 from '../../../../assets/odontograma/12.png';
import num11 from '../../../../assets/odontograma/11.png';
import num21 from '../../../../assets/odontograma/21.png';
import num22 from '../../../../assets/odontograma/22.png';
import num23 from '../../../../assets/odontograma/23.png';
import num24 from '../../../../assets/odontograma/24.png';
import num25 from '../../../../assets/odontograma/25.png';
import num26 from '../../../../assets/odontograma/26.png';
import num27 from '../../../../assets/odontograma/27.png';
import num28 from '../../../../assets/odontograma/28.png';

import { OdontogramaContext } from './OdontogramaContext';

export const BarraImagenesSuperior = () => {
	const { setDiente, DientesCollection } = useContext(OdontogramaContext);
	return (
		<div className="odontograma-actual container-superior-images">
			<div
				style={{ backgroundImage: 'url(' + num18 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 18)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num17 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 17)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num16 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 16)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num15 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 15)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num14 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 14)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num13 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 13)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num12 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 12)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num11 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 11)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num21 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 21)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num22 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 22)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num23 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 23)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num24 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 24)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num25 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 25)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num26 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 26)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num27 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 27)
						]
					);
				}}
			></div>
			<div
				style={{ backgroundImage: 'url(' + num28 + ')' }}
				onClick={() => {
					setDiente(
						DientesCollection[
							DientesCollection.findIndex((diente) => diente.numero === 28)
						]
					);
				}}
			></div>
		</div>
	);
};

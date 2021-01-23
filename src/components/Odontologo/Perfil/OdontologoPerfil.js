import React, { useState } from 'react';
import portada from '../../../assets/images/doctor-portada.png';
import { useForm } from '../../../hooks/useForm';
import '../../../styles/Odontologo/Perfil/OdontologoPerfil.css';

const ProfileUser = {
	name: 'Delgado Alvarez Edwin Ricardo',
	codigo: 10021,
	genero: 'Masculino',
	tipo: 'Cirujano Dentista',
	dni: '72817345',
	email: 'luisjh@gmail.com',
	cantidad: 8,
	telefono: '956-234-675',
	portfolio:
		'http://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=20702',
};

export const OdontologoPerfil = () => {
	const [UserData, setUserData, reset] = useForm(ProfileUser);

	const [inputDisabled, setinputDisabled] = useState(true);
	const [TextButton, setTextButton] = useState('Editar');

	const changeDisabled = () => {
		setinputDisabled(inputDisabled === true ? false : true);
		setTextButton(TextButton === 'Editar' ? 'Guardar' : 'Editar');
	};

	const ResetForm = () => {
		reset();
		setTextButton('Editar');
		setinputDisabled(true);
	};
	return (
		<div id="odontologoPerfil" className="odontologo-perfil">
			<div className="odontologo-foto" style={{ backgroundImage: `url(${portada})` }}>
				{/* Foto del doctor */}
				<img
					src="https://plataformas.news/online/nota_the-good-doctor-posiciona-sony-channel-en-la-region.jpg"
					alt="imagenperfil"
				/>
				<button
					id="changePhoto"
					onClick={() => {
						document.getElementById('imgupload').click();
					}}
				>
					Cambiar Foto
				</button>
				<input type="file" id="imgupload" />
			</div>
			<div className="odontologo-nombre">
				{/* Cargo */}
				<h3>{UserData.tipo}</h3>
				{/* Nombre y Apellido */}
				<h1>{UserData.name}</h1>
				{/* Codigo */}
				<p>
					Codigo: <span>{UserData.codigo}</span>
				</p>
			</div>
			<div className="odontologo-datos">
				<div className="datos-odontologo-top">
					<h3>Datos Principales</h3>
					<a href={UserData.portfolio} target="_blank" rel="noreferrer">
						Ver Portafolio {'>'}
					</a>
				</div>
				<div className="datos-odontologo-inputs">
					<div className="txt-input">
						<label htmlFor="">Nombre Completo</label>
						<input
							type="text"
							name="name"
							autoComplete="off"
							placeholder={UserData.name}
							disabled={inputDisabled}
							value={UserData.name}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Genero</label>
						<input
							type="text"
							name="genero"
							autoComplete="off"
							placeholder={UserData.genero}
							disabled={inputDisabled}
							value={UserData.genero}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">DNI</label>
						<input
							type="text"
							name="dni"
							autoComplete="off"
							placeholder={UserData.dni}
							disabled={inputDisabled}
							value={UserData.dni}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Email</label>
						<input
							type="text"
							name="email"
							autoComplete="off"
							placeholder={UserData.email}
							disabled={inputDisabled}
							value={UserData.email}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">N° de pacientes</label>
						<input
							type="text"
							name="cantidad"
							autoComplete="off"
							placeholder={UserData.cantidad}
							disabled={inputDisabled}
							value={UserData.cantidad}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Telefono</label>
						<input
							type="text"
							name="telefono"
							autoComplete="off"
							placeholder={UserData.telefono}
							disabled={inputDisabled}
							value={UserData.telefono}
							onChange={setUserData}
						/>
					</div>
				</div>
				<button className="btnPerfilOdontologo" onClick={changeDisabled}>
					{TextButton}
				</button>

				{TextButton === 'Guardar' ? (
					<button className="btnPerfilOdontologo" onClick={ResetForm}>
						Cancelar
					</button>
				) : null}
			</div>
		</div>
	);
};

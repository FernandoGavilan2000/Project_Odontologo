import React, { useState, useContext, useRef, useEffect } from 'react';
import portada from '../../../assets/images/doctor-portada.png';
import { useForm } from '../../../hooks/useForm';
import '../../../styles/Odontologo/Perfil/OdontologoPerfil.css';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';
import { FetchUpload } from '../../../helpers/Firebase/FetchUpload';
import { storage } from '../../../firebase/config';

//Aqui cuando ocurra un cambio en el perfil debo llamara al context User , para que el effect de arriba grabe los cambios

const ProfileUser = {
	name: 'Delgado Alvarez Edwin Ricardo',
	codigo: 10021,
	genero: 'Masculino',
	especialidad: 'Cirujano Dentista',
	dni: '72817345',
	email: 'luisjh@gmail.com',
	urlperfil:
		'https://plataformas.news/online/nota_the-good-doctor-posiciona-sony-channel-en-la-region.jpg',
	cantidad: 8,
	telefono: '956-234-675',
	portfolio:
		'http://dina.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=20702',
};

export const OdontologoPerfil = () => {
	const { user, dispatch } = useContext(AuthContext);

	const isUpdated = useRef(false);
	const [UserData, setUserData, reset] = useForm(ProfileUser);

	const [inputDisabled, setinputDisabled] = useState(true);
	const [TextButton, setTextButton] = useState('Editar');

	const saveInformation = async () => {
		setinputDisabled(true);

		isUpdated.current = true;
		//Hacer fetch a Cancino

		//Actualizar el context con los nuevos cambios

		const FullNameSplit = UserData.name.split(' ');
		const NameSplit = `${FullNameSplit[0]} ${FullNameSplit[1]}`;

		if (user.imageurl !== ProfileUser.urlperfil) {
			try {
				let newImage = await FetchUpload(
					'/profiles/',
					document.querySelector('#imgupload').files[0]
				);
				//Despues pasar nueva info a la API para Actualizar
				console.log(newImage);
			} catch (error) {
				console.error('No se pudo guardar la nueva imagen en Firebase');
			}
		} else {
			//Actualizar nueva data a API

			//De prueba ESTA ES LA BUENA
			let newImage = await FetchUpload(
				'/profiles/',
				document.querySelector('#imgupload').files[0]
			);
			console.log(newImage);
			dispatch({
				type: types.updateprofile,
				payload: {
					cod: user.cod,
					name: NameSplit,
					type: user.type,
					imageurl: newImage,
				},
			});

			//Despues pasar nueva info a la API para Actualizar
		}
	};

	const previewNewPhoto = () => {
		const newImage = document.querySelector('#imgupload').files[0];
		console.log(newImage);
		let reader = new FileReader();

		reader.onload = function () {
			document.getElementById('imgProfileUser').src = this.result;
			setinputDisabled(false);
			setTextButton('Cancelar');
		};
		reader.readAsDataURL(newImage);
	};

	const changeDisabled = () => {
		if (TextButton === 'Editar') {
			setinputDisabled(false);
			setTextButton('Cancelar');
		} else {
			reset();

			document.querySelector('#imgProfileUser').src = user.imageurl;

			setinputDisabled(true);
			setTextButton('Editar');
		}
	};

	useEffect(() => {
		return () => {
			if (!isUpdated.current) {
				console.log('Debo de regresar el perfil al estado original');
			}
		};
	}, []);
	return (
		<div id="odontologoPerfil" className="odontologo-perfil">
			<div className="odontologo-foto" style={{ backgroundImage: `url(${portada})` }}>
				{/* Foto del doctor */}
				<img src={user.imageurl} alt="imagenperfil" id="imgProfileUser" />
				<button
					id="changePhoto"
					onClick={() => {
						document.getElementById('imgupload').click();
					}}
				>
					Cambiar Foto
				</button>
				<input type="file" id="imgupload" accept="image/*" onChange={previewNewPhoto} />
			</div>
			<div className="odontologo-nombre">
				{/* Cargo */}
				<h3>{UserData.especialidad}</h3>
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
					<div className="txt-input">
						<label htmlFor="">Portafolio</label>
						<input
							type="text"
							name="portfolio"
							autoComplete="off"
							placeholder={UserData.portfolio}
							disabled={inputDisabled}
							value={UserData.portfolio}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Especialidad</label>
						<input
							type="text"
							name="especialidad"
							autoComplete="off"
							placeholder={UserData.especialidad}
							disabled={inputDisabled}
							value={UserData.especialidad}
							onChange={setUserData}
						/>
					</div>
				</div>
				<button className="btnPerfilOdontologo" onClick={changeDisabled}>
					{TextButton}
				</button>
				{TextButton === 'Cancelar' ? (
					<button className="btnPerfilOdontologo" onClick={saveInformation}>
						Guardar
					</button>
				) : null}
			</div>
		</div>
	);
};

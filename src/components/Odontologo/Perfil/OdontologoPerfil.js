import React, { useState, useContext, useRef, useEffect } from 'react';
import portada from '../../../assets/images/doctor-portada.png';
import '../../../styles/Odontologo/Perfil/OdontologoPerfil.css';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';
import { FetchUpload } from '../../../helpers/Firebase/FetchUpload';
import { getDoctorByID } from '../../../helpers/Backend/getDoctorByID';
import { Spinner } from '../../Tools/Spinner';
import { useHistory } from 'react-router-dom';

const imagenDefault =
	'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg';

//Aqui cuando ocurra un cambio en el perfil debo llamara al context User , para que el effect de arriba grabe los cambios

/*
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
*/

export const OdontologoPerfil = () => {
	//const [UserData, setUserData, reset] = useForm(null);
	const [Data, setData] = useState(null);
	const { user, dispatch } = useContext(AuthContext);

	const isUpdated = useRef(false);
	const _isMounted = useRef(true);
	const history = useHistory();
	const [inputDisabled, setinputDisabled] = useState(true);
	const [TextButton, setTextButton] = useState('Editar');

	const saveInformation = async () => {
		setinputDisabled(true);
		isUpdated.current = true;

		//Verificar si hay una nueva imagen
		if (user.d_img !== Data.d_img) {
			try {
				let newImage = await FetchUpload(
					'/profiles/',
					document.querySelector('#imgupload').files[0]
				);
				//Despues pasar nueva info a la API para Actualizar
				console.log(newImage);
			} catch (error) {
				console.error('No se pudo guardar la nueva imagen en Firebase,', error);
			}
		} else {
			//Actualizar nueva data a API

			//De prueba ESTA ES LA BUENA
			let newImage = await FetchUpload(
				'/profiles/',
				document.querySelector('#imgupload').files[0]
			);
			console.log(newImage);
			/*
			dispatch({
				type: types.updateprofile,
				payload: {
					cod: user.cod,
					name: NameSplit,
					type: user.type,
					imageurl: newImage,
				},
			});
			*/

			//Despues pasar nueva info a la API para Actualizar
		}
	};

	const previewNewPhoto = () => {
		const newImage = document.querySelector('#imgupload').files[0];
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
			//reset(); //Volver a llamr a la API?
			document.querySelector('#imgProfileUser').src = user.imageurl;
			setinputDisabled(true);
			setTextButton('Editar');
		}
	};

	const handleForm = (e) => {
		isUpdated.current = true;
		setData({
			...Data,
			[e.target.name]: e.target.value,
		});
	};

	useEffect(() => {
		getDoctorByID(user.d_id)
			.then((data) => {
				if (_isMounted.current) {
					setData({
						d_id: data[0].d_id,
						d_name: data[0].d_name,
						d_lastname: data[0].d_lastname,
						d_gender: data[0].d_gender,
						d_branch: data[0].d_branch,
						d_dni: data[0].d_dni,
						d_email: data[0].d_email,
						d_img: data[0].d_img,
						d_npatients: data[0].d_npatients,
						d_cellphone: data[0].d_cellphone,
						d_portfolio: data[0].d_portfolio,
					});
				}
			})
			.catch((error) => {
				console.info('Error al pedir los datos del paciente', error);
			});
	}, []);

	useEffect(() => {
		return () => {
			if (!isUpdated.current) {
				console.log('Debo de regresar el perfil al estado original');
			}
		};
	}, []);

	useEffect(() => {
		return () => {
			_isMounted.current = false;
		};
	});

	return (
		<>
			{Data ? (
				<div id="odontologoPerfil" className="odontologo-perfil">
					<div className="odontologo-foto" style={{ backgroundImage: `url(${portada})` }}>
						{/* Foto del doctor */}
						<img
							src={Data.d_img === 'abc' ? imagenDefault : Data.d_img}
							alt="imagenperfil"
							id="imgProfileUser"
						/>
						<button
							id="changePhoto"
							onClick={() => {
								document.getElementById('imgupload').click();
							}}
						>
							Cambiar Foto
						</button>
						<input
							type="file"
							id="imgupload"
							accept="image/*"
							onChange={previewNewPhoto}
						/>
					</div>
					<div className="odontologo-nombre">
						{/* Cargo */}
						<h3>{Data.d_branch}</h3>
						{/* Nombre y Apellido */}
						<h1>{`${Data.d_name} ${Data.d_lastname}`}</h1>
						{/* Codigo */}
						<p>
							Codigo: <span>{Data.d_id}</span>
						</p>
					</div>
					<div className="odontologo-datos">
						<div className="datos-odontologo-top">
							<h3>Datos Principales</h3>
							<a href={Data.d_portfolio} target="_blank" rel="noreferrer">
								Ver Portafolio {'>'}
							</a>
						</div>
						<div className="datos-odontologo-inputs">
							<div className="txt-input">
								<label htmlFor="">Nombre</label>
								<input
									type="text"
									name="d_name"
									autoComplete="off"
									placeholder={Data.d_name}
									disabled={inputDisabled}
									value={Data.d_name}
									onChange={handleForm}
								/>
							</div>
							<div className="txt-input">
								<label htmlFor="">Apellido</label>
								<input
									type="text"
									name="d_lastname"
									autoComplete="off"
									placeholder={Data.d_lastname}
									disabled={inputDisabled}
									value={Data.d_lastname}
									onChange={handleForm}
								/>
							</div>
							<div className="txt-input">
								<label htmlFor="">Genero</label>
								<input
									type="text"
									name="d_gender"
									autoComplete="off"
									placeholder={Data.d_gender}
									disabled={inputDisabled}
									value={Data.d_gender}
									onChange={handleForm}
								/>
							</div>
							<div className="txt-input">
								<label htmlFor="">DNI</label>
								<input
									type="text"
									name="d_dni"
									autoComplete="off"
									placeholder={Data.d_dni}
									disabled={inputDisabled}
									value={Data.d_dni}
									onChange={handleForm}
								/>
							</div>
							<div className="txt-input">
								<label htmlFor="">Email</label>
								<input
									type="text"
									name="d_email"
									autoComplete="off"
									placeholder={Data.d_email}
									disabled={inputDisabled}
									value={Data.d_email}
									onChange={handleForm}
								/>
							</div>

							<div className="txt-input">
								<label htmlFor="">Telefono</label>
								<input
									type="text"
									name="d_cellphone"
									autoComplete="off"
									placeholder={Data.d_cellphone}
									disabled={inputDisabled}
									value={Data.d_cellphone}
									onChange={handleForm}
								/>
							</div>
							<div className="txt-input">
								<label htmlFor="">Portafolio</label>
								<input
									type="text"
									name="d_portfolio"
									autoComplete="off"
									placeholder={Data.d_portfolio}
									disabled={inputDisabled}
									value={Data.d_portfolio}
									onChange={handleForm}
								/>
							</div>
							<div className="txt-input">
								<label htmlFor="">Especialidad</label>
								<input
									type="text"
									name="d_branch"
									autoComplete="off"
									placeholder={Data.d_branch}
									disabled={inputDisabled}
									value={Data.d_branch}
									onChange={handleForm}
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
			) : (
				<Spinner />
			)}
		</>
	);
};

import React, { useState } from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteRegistro.css';
import queryString from 'query-string';
import Swal from 'sweetalert2';
//import add from '../../../assets/images/add.svg'
import file from '../../../assets/images/file.svg';
import image from '../../../assets/images/image.svg';
import save from '../../../assets/images/save.svg';
import { useForm } from '../../../hooks/useForm';
import { FetchUpload } from '../../../helpers/Firebase/FetchUpload';
import { useHistory } from 'react-router-dom';

const newPacientes = {
	p_name: '',
	p_lastname: '',
	p_birthday: '',
	p_age: 0,
	p_gender: '',
	p_dni: '',
	p_address: '',
	p_cellphone: '',
	p_email: '',
	p_weight: 0,
	p_height: 0,
	p_allergy: '',
};

export const PacienteRegistro = () => {
	const [NewUser, setNewUser] = useForm(newPacientes);

	const [FilesName, setFilesName] = useState({
		inputfile1: '',
		inputfile2: '',
	});
	const history = useHistory();

	const previewNameFile1 = (e) => {
		const newImage = document.querySelector('#agregarHistoriaInput').files[0].name;
		setFilesName({
			...FilesName,
			inputfile1: newImage,
		});
	};

	const previewNameFile2 = (e) => {
		const newImage = document.querySelector('#agregarImagenInput').files[0].name;
		setFilesName({
			...FilesName,
			inputfile2: newImage,
		});
	};

	const handleSubmit = async () => {
		let anamnesis = document.querySelector('#agregarHistoriaInput').files;
		let photonew = document.querySelector('#agregarImagenInput').files;
		if (photonew.length === 0 && anamnesis.length === 0) {
			Swal.fire(
				'Archivo Faltante',
				'Se requiere el archivo/foto para crear un nuevo paciente',
				'warning'
			);
		} else {
			//Aqui subir la foto y conseguir la URL
			Swal.fire({
				title: 'Creando un nuevo paciente',
				text: 'Por favor espere...',
				allowOutsideClick: false,
				showCancelButton: false,
				showConfirmButton: false,
				willOpen: () => {
					Swal.showLoading();
				},
			});
			try {
				//Subir una nueva foto a Firebase
				const photoNewPaciente = await FetchUpload('/profiles/', photonew[0]);
				//Creando un nuevo paciente
				const respuestaAPI = await fetch(
					`${process.env.REACT_APP_API_URL}/api/pacientes`,
					{
						method: 'POST',
						headers: {
							Accept: 'application/json',
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						body: queryString.stringify({
							...NewUser,
							p_img: `${photoNewPaciente}`,
						}),
					}
				);
				const { insertId } = await respuestaAPI.json();

				//Subir un nuevo pdf al Firebase
				const responseFirebaseNewSheet = await FetchUpload('/anamnesis/', anamnesis[0]);
				//Creando Historia Clinica
				const responseAPINewSheet = await fetch(
					`${process.env.REACT_APP_API_URL}/api/historias`,
					{
						method: 'POST',
						headers: {
							Accept: 'application/json',
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						body: queryString.stringify({
							hc_pid: insertId,
							hc_tid: 3000,
							hc_amnamesis: `${responseFirebaseNewSheet}`,
							hc_comment: '',
						}),
					}
				);
				if (responseAPINewSheet.ok) {
					Swal.close();
					Swal.fire({
						icon: 'success',
						title: 'Paciente Creado con Éxito!',
						text: 'Se registro correctamente!',
					});
					history.replace('/app/pacientes');
				} else {
					Swal.close();
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'No se pudo registrar al paciente!',
					});
				}
			} catch (error) {
				Swal.close();
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'No se pudo registrar al paciente!',
				});
				console.warn('No se pudo registrar al Usuario');
			}
		}
	};

	return (
		<div id="pacienteRegistroContenedor" className="paciente-registro-contenedor">
			<h2>Agregar nuevo paciente</h2>
			<p>
				Escriba los datos del paciente y adjunte la su historia clinica para completar el
				perfil.
			</p>

			<div className="datos-personales">
				<h3>Datos Principales</h3>
				<div className="datos-personales-inputs">
					<div className="txt-input">
						<label htmlFor="">Nombres</label>
						<input
							type="text"
							name="p_name"
							autoComplete="off"
							value={NewUser.p_name}
							onChange={setNewUser}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Apellidos</label>
						<input
							type="text"
							name="p_lastname"
							autoComplete="off"
							value={NewUser.p_lastname}
							onChange={setNewUser}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Edad</label>
						<input
							type="number"
							min="1"
							max="120"
							name="p_age"
							autoComplete="off"
							value={NewUser.p_age}
							onChange={setNewUser}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Genero</label>
						<input
							type="text"
							name="p_gender"
							autoComplete="off"
							placeholder="Hombre/Mujer"
							value={NewUser.p_gender}
							onChange={setNewUser}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Alergia</label>
						<input
							type="text"
							name="p_allergy"
							autoComplete="off"
							placeholder="Ninguna"
							value={NewUser.p_allergy}
							onChange={setNewUser}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Fecha de Nacimiento</label>
						<input
							type="date"
							name="p_birthday"
							value={NewUser.p_birthday}
							min="1900-01-01"
							max="2025-00-00"
							onChange={setNewUser}
						></input>
					</div>
					<div className="txt-input">
						<label htmlFor="">Dni</label>
						<input
							type="text"
							name="p_dni"
							autoComplete="off"
							value={NewUser.p_dni}
							onChange={setNewUser}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Domicilio</label>
						<input
							type="text"
							name="p_address"
							autoComplete="off"
							value={NewUser.p_address}
							onChange={setNewUser}
						/>
					</div>

					<div className="txt-input">
						<label htmlFor="">Celular</label>
						<input
							type="text"
							name="p_cellphone"
							autoComplete="off"
							value={NewUser.p_cellphone}
							onChange={setNewUser}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Email</label>
						<input
							type="text"
							name="p_email"
							autoComplete="off"
							value={NewUser.p_email}
							onChange={setNewUser}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Peso (kg)</label>
						<input
							type="number"
							min="15"
							max="200"
							name="p_weight"
							autoComplete="off"
							value={NewUser.p_weight}
							onChange={setNewUser}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Altura(cm)</label>
						<input
							type="number"
							min="15"
							max="300"
							name="p_height"
							autoComplete="off"
							value={NewUser.p_height}
							onChange={setNewUser}
						/>
					</div>
				</div>
			</div>
			<div className="mas-informacion">
				<h3>Mas Información</h3>

				<button
					id="agregarHistoria"
					className="agregar-historia"
					onClick={() => {
						document.getElementById('agregarHistoriaInput').click();
					}}
				>
					<img src={file} alt="file" />
					<span>Agregar Anamnesis</span>
				</button>

				<label style={{ display: 'block' }}>{FilesName.inputfile1}</label>
				<br />
				<button
					id="agregarImagen"
					className="agregar-imagen"
					onClick={() => {
						document.getElementById('agregarImagenInput').click();
					}}
				>
					<img src={image} alt="Iconnewphoto" />
					<span>Subir foto de perfil</span>
				</button>

				<label style={{ display: 'block' }}>{FilesName.inputfile2}</label>

				<input
					type="file"
					className="agregar-historia"
					name="inputfile1"
					id="agregarHistoriaInput"
					style={{ display: 'none' }}
					accept="application/pdf"
					onChange={previewNameFile1}
				/>

				<input
					type="file"
					className="agregar-historia"
					name="inputfile2"
					style={{ display: 'none' }}
					accept="image/*"
					id="agregarImagenInput"
					onChange={previewNameFile2}
				/>

				<button className="guardar" onClick={handleSubmit}>
					<img src={save} alt="add" />
					<span>Guardar</span>
				</button>
			</div>
		</div>
	);
};

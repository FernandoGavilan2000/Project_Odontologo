import React, { useState } from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuDatPersonales.css';
import moment from 'moment';
import 'moment/locale/es';
import Swal from 'sweetalert2';

//Icon
import seewhite from '../../../assets/images/see-white.svg';
import { useForm } from '../../../hooks/useForm';
import { getAnamnesis } from '../../../helpers/Backend/getAnamnesis';
import { UpdatePatientInfo } from '../../../helpers/Backend/UpdatePatientInfo';

function PacienteMenuDatPersonales({ Patient }) {
	const [inputDisabled, setinputDisabled] = useState(true);
	const [TextButton, setTextButton] = useState('Editar');

	const [UserData, setUserData, reset] = useForm({
		p_name: Patient.p_name,
		p_lastname: Patient.p_lastname,
		p_gender: Patient.p_gender,
		p_allergy: Patient.p_allergy,
		p_birthday: Patient.p_birthday,
		p_dni: Patient.p_dni,
		p_address: Patient.p_address,
		p_cellphone: Patient.p_cellphone,
		p_weight: Patient.p_weight,
		p_age: Patient.p_age,
		p_height: Patient.p_height,
		p_img: Patient.p_img,
		p_email: Patient.p_email,
	});

	const changeDisabled = () => {
		if (TextButton === 'Cancelar') {
			reset();
			setinputDisabled(true);
			setTextButton('Editar');
		} else {
			setinputDisabled(false);
			setTextButton('Cancelar');
		}
	};

	const handleSubmit = () => {
		Swal.fire({
			title: 'Actualizando los Datos del Paciente',
			text: 'Por favor espere...',
			allowOutsideClick: false,
			showCancelButton: false,
			showConfirmButton: false,
			willOpen: () => {
				Swal.showLoading();
			},
		});
		UpdatePatientInfo(Patient.p_id, UserData)
			.then((response) => {
				if (response.ok) {
					Swal.close();
					Swal.fire({
						icon: 'success',
						title: 'Nuevos Cambios Guardados!',
						text: 'Se registro correctamente!',
					});
					console.log('Actualizado');
				} else {
					Swal.close();
				}
			})
			.catch((error) => {
				Swal.close();
				Swal.fire({
					icon: 'error',
					title: 'Oopsss!',
					text: 'No se pudo actualizar los datos del paciente',
				});
				console.info('Error con el Boton handleSubmit-UpdatePatient', error);
			});
	};
	const ShowAnamnesis = async () => {
		const urlData = await getAnamnesis(Patient.p_id);
		if (urlData !== 'abc' || urlData === '') {
			window.open(urlData, '_blank');
		} else {
			Swal.fire({
				icon: 'warning',
				title: 'Oops...',
				text: 'Este Paciente No Tiene Archivo Anamnesis ',
			});
		}
	};

	return (
		<div id="pacienteMenuDatPersonales" className="paciente-menu-dat-personales">
			<div className="datos-personales">
				<h2>Datos Principales</h2>
				<button
					onClick={changeDisabled}
					className="btn_changeEdit"
					style={{ display: 'inline-block' }}
				>
					{TextButton}
				</button>

				{TextButton === 'Cancelar' && (
					<button
						onClick={handleSubmit}
						className="btn_changeEdit"
						style={{ display: 'inline-block' }}
					>
						Guardar
					</button>
				)}
				<div className="datos-personales-inputs">
					<div className="txt-input">
						<label htmlFor="">Nombres :</label>
						<input
							type="text"
							name="p_name"
							autoComplete="off"
							placeholder={UserData.p_name}
							disabled={inputDisabled}
							value={UserData.p_name}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Apellidos :</label>
						<input
							type="text"
							name="p_lastname"
							autoComplete="off"
							placeholder={UserData.p_lastname}
							disabled={inputDisabled}
							value={UserData.p_lastname}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Genero:</label>
						<input
							type="text"
							name="p_gender"
							autoComplete="off"
							placeholder={UserData.p_gender}
							disabled={inputDisabled}
							value={UserData.p_gender}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Alergia :</label>
						<input
							type="text"
							name="p_allergy"
							autoComplete="off"
							placeholder={UserData.p_allergy}
							disabled={inputDisabled}
							value={UserData.p_allergy}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Fecha de Nacimiento :</label>
						<input
							type="text"
							name="p_birthday"
							autoComplete="off"
							placeholder={moment(UserData.p_birthday).local().format('LLL')}
							disabled={true}
							value={moment(UserData.p_birthday).local().format('LL')}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">DNI :</label>
						<input
							type="text"
							name="p_dni"
							autoComplete="off"
							placeholder={UserData.p_dni}
							disabled={inputDisabled}
							value={UserData.p_dni}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Domicilio :</label>
						<input
							type="text"
							name="p_address"
							autoComplete="off"
							placeholder={UserData.p_address}
							disabled={inputDisabled}
							value={UserData.p_address}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Telefono:</label>
						<input
							type="text"
							name="p_cellphone"
							autoComplete="off"
							placeholder={UserData.p_cellphone}
							disabled={inputDisabled}
							value={UserData.p_cellphone}
							onChange={setUserData}
						/>
					</div>
				</div>
			</div>
			<div className="mas-informacion">
				<h3>Mas Información</h3>
				<button onClick={ShowAnamnesis}>
					<img src={seewhite} alt="see" />
					<span>Ver Anamnesis</span>
				</button>
			</div>
		</div>
	);
}

export default PacienteMenuDatPersonales;

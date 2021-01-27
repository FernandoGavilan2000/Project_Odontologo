import React, { useState } from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuDatPersonales.css';
import moment from 'moment';
import 'moment/locale/es';

//Icon
import seewhite from '../../../assets/images/see-white.svg';
import { useForm } from '../../../hooks/useForm';

function PacienteMenuDatPersonales({ Patient }) {
	const [inputDisabled, setinputDisabled] = useState(true);
	const [TextButton, setTextButton] = useState('Editar');

	const [UserData, setUserData] = useForm({
		p_name: Patient.p_name,
		p_lastname: Patient.p_lastname,
		p_gender: Patient.p_gender,
		p_allergy: Patient.p_allergy,
		p_birthday: Patient.p_birthday,
		p_dni: Patient.p_dni,
		p_address: Patient.p_address,
		p_cellphone: Patient.p_cellphone,
	});

	const changeDisabled = () => {
		setinputDisabled(inputDisabled === true ? false : true);
		setTextButton(TextButton === 'Editar' ? 'Guardar' : 'Editar');
	};

	return (
		<div id="pacienteMenuDatPersonales" className="paciente-menu-dat-personales">
			<div className="datos-personales">
				<h2>Datos Principales</h2>
				<button onClick={changeDisabled} className="btn_changeEdit">
					{TextButton}
				</button>
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
							disabled={true}
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
				<button>
					<img src={seewhite} alt="see" />
					<span>Ver Historia Clinica Completa</span>
				</button>
			</div>
		</div>
	);
}

export default PacienteMenuDatPersonales;

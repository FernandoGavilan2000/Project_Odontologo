import React, { useState } from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuDatPersonales.css';

//Icon
import seewhite from '../../../assets/images/see-white.svg';
import { useForm } from '../../../hooks/useForm';

function PacienteMenuDatPersonales() {
	const [inputDisabled, setinputDisabled] = useState(true);
	const [TextButton, setTextButton] = useState('Editar');

	const [UserData, setUserData] = useForm({
		nombres: 'Emily',
		apellidos: 'Diaz Ramirez',
		sexo: 'Femenino',
		alergia: '',
		fecha: '15-06-1975',
		dni: '74512453',
		domicilio: 'Urb.Los Portales A-32',
		ciudad: 'Ica',
		estado: 'Casada',
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
							name="nombres"
							autoComplete="off"
							placeholder={UserData.nombres}
							disabled={inputDisabled}
							value={UserData.nombres}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Apellidos :</label>
						<input
							type="text"
							name="apellidos"
							autoComplete="off"
							placeholder={UserData.apellidos}
							disabled={inputDisabled}
							value={UserData.apellidos}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Sexo :</label>
						<input
							type="text"
							name="sexo"
							autoComplete="off"
							placeholder={UserData.sexo}
							disabled={inputDisabled}
							value={UserData.sexo}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Alergia :</label>
						<input
							type="text"
							name="alergia"
							autoComplete="off"
							placeholder={UserData.alergia}
							disabled={inputDisabled}
							value={UserData.alergia}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Fecha de Nacimiento :</label>
						<input
							type="text"
							name="fecha"
							autoComplete="off"
							placeholder={UserData.fecha}
							disabled={inputDisabled}
							value={UserData.fecha}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">DNI :</label>
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
						<label htmlFor="">Domicilio :</label>
						<input
							type="text"
							name="domicilio"
							autoComplete="off"
							placeholder={UserData.domicilio}
							disabled={inputDisabled}
							value={UserData.domicilio}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Ciudad/Distrito :</label>
						<input
							type="text"
							name="ciudad"
							autoComplete="off"
							placeholder={UserData.ciudad}
							disabled={inputDisabled}
							value={UserData.ciudad}
							onChange={setUserData}
						/>
					</div>
					<div className="txt-input">
						<label htmlFor="">Estado Civil :</label>
						<input
							type="text"
							name="estado"
							autoComplete="off"
							placeholder={UserData.estado}
							disabled={inputDisabled}
							value={UserData.estado}
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

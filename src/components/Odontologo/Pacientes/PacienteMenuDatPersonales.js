import React, { useState } from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuDatPersonales.css';

//Icon
import seewhite from '../../../assets/images/see-white.svg';

let userDetail = [
	{
		propiedad: 'nombres',
		valor: 'Emily',
	},
	{
		propiedad: 'apellidos',
		valor: 'Hernandez',
	},
	{
		propiedad: 'sexo',
		valor: 'Femenino',
	},
	{
		propiedad: 'alergia',
		valor: 'Ninguna',
	},
	{
		propiedad: 'fecha',
		valor: '06-06-1980',
	},
	{
		propiedad: 'dni',
		valor: '8913123',
	},
	{
		propiedad: 'domicilio',
		valor: 'Urb.Los Portales E-45',
	},
	{
		propiedad: 'ciudad',
		valor: 'Ica',
	},
	{
		propiedad: 'estado',
		valor: 'Casada',
	},
];

function PacienteMenuDatPersonales() {
	const [inputDisabled, setinputDisabled] = useState(true);
	const [TextButton, setTextButton] = useState('Editar');

	const [UserData, setUserData] = useState({
		nombres: '',
		apellidos: '',
		sexo: '',
		alergia: '',
		fecha: '',
		dni: '',
		domicilio: '',
		ciudad: '',
		estado: '',
	});

	const changeDisabled = () => {
		setinputDisabled(inputDisabled === true ? false : true);
		setTextButton(TextButton === 'Editar' ? 'Guardar' : 'Editar');
	};

	const handleInputs = (e) => {
		setUserData({
			[e.target.name]: e.target.value,
		});
	};

	return (
		<div id="pacienteMenuDatPersonales" className="paciente-menu-dat-personales">
			<div className="datos-personales">
				<h2>Datos Principales</h2>
				<button onClick={changeDisabled} className="btn_changeEdit">
					{TextButton}
				</button>
				<div className="datos-personales-inputs">
					{userDetail.map((item) => (
						<div className="txt-input">
							<label htmlFor="">{item.propiedad}</label>
							<input
								type="text"
								name={item.propiedad}
								id=""
								autoComplete="off"
								placeholder={item.valor}
								disabled={inputDisabled}
								value={UserData[item.propiedad]}
								onChange={handleInputs}
							/>
						</div>
					))}
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

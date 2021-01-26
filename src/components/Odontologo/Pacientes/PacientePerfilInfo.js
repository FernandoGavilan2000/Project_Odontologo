import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacientePerfilInfo.css';

//Icon
import male from '../../../assets/images/male.svg';
import female from '../../../assets/images/female.svg';

import perfil3 from '../../../assets/images/patient3.jpg';

function PacientePerfilInfo({ Patient }) {
	return (
		<div id="pacientePerfilInfo" className="paciente-perfil-info paciente-datos">
			<div className="perfil">
				{/* Imagen Perfil */}
				<img src={Patient.p_img} alt="perfil_user" />
				<div>
					{/* Nombre Perfil */}
					<p className="nombre-perfil">{`${Patient.p_name} ${Patient.p_lastname}`}</p>
					{/* DNI Perfil */}
					<p className="dni-perfil">
						COD: <span>{Patient.p_id}</span>
					</p>
				</div>
			</div>
			<div className="info">
				<h3>INFO</h3>
				<p>
					<span>{Patient.p_age} años</span>
					<img src={Patient.p_gender === 'Hombre' ? male : female} alt="icon_genero" />
					<span>{Patient.p_birthday}</span>
				</p>
				<p>
					Estatura: <span>{Patient.p_height} cm</span>
				</p>
				<p>
					Peso: <span>{Patient.p_weight} kg</span>
				</p>
			</div>
			<div className="contacto">
				<h3>CONTACTO</h3>
				<p>
					Telef:
					<span>{Patient.p_cellphone}</span>
				</p>
				<p>
					Email: <span>{Patient.p_email}</span>
				</p>
			</div>
		</div>
	);
}

export default PacientePerfilInfo;

import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacientePerfilInfo.css';

//Icon
//import male from '../../../assets/images/male.svg';
import female from '../../../assets/images/female.svg';

import perfil3 from '../../../assets/images/patient3.jpg';

function PacientePerfilInfo() {
	return (
		<div id="pacientePerfilInfo" className="paciente-perfil-info paciente-datos">
			<div className="perfil">
				{/* Imagen Perfil */}
				<img src={perfil3} alt="perfil_user" />
				<div>
					{/* Nombre Perfil */}
					<p className="nombre-perfil">Marvin McKinney</p>
					{/* DNI Perfil */}
					<p className="dni-perfil">
						COD: <span>74881829</span>
					</p>
				</div>
			</div>
			<div className="info">
				<h3>INFO</h3>
				<p>
					<span>23 años</span>
					<img src={female} alt="icon_genero" />
					<span>15/05/1997</span>
				</p>
				<p>
					Estatura: <span>178 cm</span>
				</p>
				<p>
					Peso: <span>65 kg</span>
				</p>
			</div>
			<div className="contacto">
				<h3>CONTACTO</h3>
				<p>
					Telef:
					<span>+51 933 15 94 54</span>
				</p>
				<p>
					Email: <span>annette_black@gmail.com</span>
				</p>
			</div>
		</div>
	);
}

export default PacientePerfilInfo;

import React from 'react';
import portada from '../../../assets/images/doctor-portada.png'
import '../../../styles/Odontologo/Perfil/OdontologoPerfil.css'

export const OdontologoPerfil = () => {
	return (
		<div id="odontologoPerfil" className="odontologo-perfil" >
			<div className="odontologo-foto" style={{ backgroundImage: `url(${portada})` }}>

				{/* Foto del doctor */}
				< img src="https://plataformas.news/online/nota_the-good-doctor-posiciona-sony-channel-en-la-region.jpg" alt="" />
				<button id="changePhoto" onClick={() => { document.getElementById('imgupload').click() }} >
					Cambiar Foto
				</button>
				<input type="file" id="imgupload" />
			</div>
			<div className="odontologo-nombre">
				{/* Cargo */}
				<h3>Medico Cirujano</h3>
				{/* Nombre y Apellido */}
				<h1>Annetter Kathryn</h1>
				{/* Codigo */}
				<p>Codigo: <span>6514-1622</span></p>
			</div>
			<div className="odontologo-datos">
				<div className="datos-odontologo-top">
					<h3>Datos Principales</h3>
					<a href="/">Ver Portafolio {">"}</a>
				</div>
				<div className="datos-odontologo-inputs">
					<div className="txt-input">
						<label htmlFor="">Nombre Completo</label>
						<input type="text" name="" id="" />
					</div>
					<div className="txt-input">
						<label htmlFor="">Genero</label>
						<input type="text" name="" id="" />
					</div>
					<div className="txt-input">
						<label htmlFor="">DNI</label>
						<input type="text" name="" id="" />
					</div>
					<div className="txt-input">
						<label htmlFor="">Email</label>
						<input type="text" name="" id="" />
					</div>
					<div className="txt-input">
						<label htmlFor="">N° de pacientes</label>
						<input type="text" name="" id="" />
					</div>
					<div className="txt-input">
						<label htmlFor="">Telefono</label>
						<input type="text" name="" id="" />
					</div>
				</div>
			</div>
		</div >
	)
};

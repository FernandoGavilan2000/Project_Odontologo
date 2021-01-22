import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteRegistro.css'

import add from '../../../assets/images/add.svg'
import file from '../../../assets/images/file.svg'
import image from '../../../assets/images/image.svg'
import save from '../../../assets/images/save.svg'

export const PacienteRegistro = () => {
	return (
		<div id="pacienteRegistroContenedor" className="paciente-registro-contenedor">

			<h2>Agregar nuevo paciente</h2>
			<p>Escriba los datos del paciente y adjunte la su historia clinica para completar el perfil.</p>
			<div className="datos-personales">
				<h3>Datos Principales</h3>
				<div className="datos-personales-inputs">
					<div className="txt-input">
						<label htmlFor="">Nombres</label>
						<input type="text" name="" id="" />
					</div>
					<div className="txt-input">
						<label htmlFor="">Apellidos</label>
						<input type="text" name="" id="" />
					</div>
					<div className="txt-input">
						<label htmlFor="">Sexo</label>
						<input type="text" name="" id="" />
					</div>
					<div className="txt-input">
						<label htmlFor="">Alergia</label>
						<input type="text" name="" id="" />
					</div>
					<div className="txt-input">
						<label htmlFor="">Fecha de Nacimiento</label>
						<input type="text" name="" id="" />
					</div>
					<div className="txt-input">
						<label htmlFor="">Dni</label>
						<input type="text" name="" id="" />
					</div>
					<div className="txt-input">
						<label htmlFor="">Domicilio</label>
						<input type="text" name="" id="" />
					</div>
					<div className="txt-input">
						<label htmlFor="">Ciudad / Distrito / Provincia</label>
						<input type="text" name="" id="" />
					</div>
					<div className="txt-input">
						<label htmlFor="">Celular</label>
						<input type="text" name="" id="" />
					</div>
					<div className="txt-input">
						<label htmlFor="">Email</label>
						<input type="text" name="" id="" />
					</div>
					<div className="txt-input">
						<label htmlFor="">Peso (kg)</label>
						<input type="text" name="" id="" />
					</div>
					<div className="txt-input">
						<label htmlFor="">Altura</label>
						<input type="text" name="" id="" />
					</div>
				</div>

			</div>
			<div className="mas-informacion">
				<h3>Mas Información</h3>
				<button id="agregarHistoria" className="agregar-historia" onClick={() => { document.getElementById('agregarHistoriaInput').click() }}>

					<img src={file} alt="file" />
					<span>Agregar historia clinica</span>

				</button>
				<button id="agregarImagen" className="agregar-imagen" onClick={() => { document.getElementById('agregarImagenInput').click() }}>

					<img src={image} alt="image" />
					<span>Subir foto de perfil</span>

				</button>

				<input type="file" id="agregarHistoriaInput" style={{ display: 'none' }} />
				<input type="file" id="agregarImagenInput" style={{ display: 'none' }} />

				<button className="guardar" >

					<img src={save} alt="add" />
					<span>Guardar</span>

				</button>
			</div>
		</div>
	);
};

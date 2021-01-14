import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuDatPersonales.css'

//Icon
import seewhite from '../../../assets/images/see-white.svg'

function PacienteMenuDatPersonales() {
    return (
        <div id="pacienteMenuDatPersonales" className="paciente-menu-dat-personales">
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
                        <label htmlFor="">Estado Civil</label>
                        <input type="text" name="" id="" />
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
    )
}

export default PacienteMenuDatPersonales
import React from 'react'
import '../../../styles/Odontologo/Pacientes/PacienteMenuPlanesTratFila.css'
import see from '../../../assets/images/see.svg'


function PacienteMenuPlanesTratFila() {
    return (
        <div className="paciente-menu-planestrat-fila">
            {/* Cod plan de tratamiento */}
            <p>165132</p>

            {/* Nombre P.T  */}
            <p>Ordodoncia</p>

            {/* Inicio */}
            <p>15/12/20</p>

            {/* Final */}
            <p>16/05/21</p>

            {/* Doctor */}
            <p>Annette Quispe</p>

            {/* Ver Detalles */}
            <div>
                <a>
                    <img src={see} alt="see" />
                    <span>Ver Comentarios</span>
                </a>
            </div>
        </div>
    )
}

export default PacienteMenuPlanesTratFila
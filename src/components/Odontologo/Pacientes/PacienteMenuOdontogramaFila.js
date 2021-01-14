import React from 'react'
import '../../../styles/Odontologo/Pacientes/PacienteMenuOdontogramaFila.css'
import see from '../../../assets/images/see.svg'


function PacienteMenuOdontogramaFila() {
    return (
        <div className="paciente-menu-odontograma-fila">
            {/* Fecha */}
            <p>20 Dic 2020</p>

            {/* Ver Detalles */}
            <div>
                <a>
                    <img src={see} alt="see" />
                    <span>Ver Detalles</span>
                </a>
            </div>
        </div>
    )
}

export default PacienteMenuOdontogramaFila
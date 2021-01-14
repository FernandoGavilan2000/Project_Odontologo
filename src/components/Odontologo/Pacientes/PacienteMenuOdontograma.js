import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuOdontograma.css'
import PacienteMenuOdontogramaFila from './PacienteMenuOdontogramaFila'


function PacienteMenuOdontograma() {
    return (
        <div id="pacienteMenuOdontograma" className="paciente-menu-odontograma">
            <div className="odontograma-tabla-top">
                <h4>Lista Actualizaciones</h4>
                <h4>Reciente Odontograma</h4>
            </div>
            <div className="odontograma-tabla-data">
                {/* Lista actualizaciones */}

                <div className="lista-actualizaciones contenedor-scroll">
                    <PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
                    <PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
                    <PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
                    <PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
                    <PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
                    <PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
                    <PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
                    <PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
                    <PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
                    <PacienteMenuOdontogramaFila></PacienteMenuOdontogramaFila>
                </div>
                <div className="odontograma-actual">
                    <img src="https://i.pinimg.com/474x/2c/54/9b/2c549ba240bc1a71ace67e80df0033cf.jpg" alt="odontograma" />
                </div>
                {/* odontograma actual */}
            </div>
        </div>
    )
}

export default PacienteMenuOdontograma
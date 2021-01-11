import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacientePerfilNav.css'

function PacientePerfilNav() {
    return (
        <ul id="pacientePerfilNav" className="paciente-nav">
            <li className="paciente-nav-item datos-personales-nav active">
                <span>Datos Personales</span>
                <div className="active-menu" />
            </li>
            <li className="paciente-nav-item citas-nav">
                <span>Citas</span>
                <div className="active-menu" />
            </li>
            <li className="paciente-nav-item planes-tratamiento-nav">
                <span>Planes de Tratamiento</span>
                <div className="active-menu" />
            </li>
            <li className="paciente-nav-item odontograma-nav">
                <span>Odontograma Actual</span>
                <div className="active-menu" />
            </li>
            <li className="paciente-nav-item facturacion-nav">
                <span>Facturación</span>
                <div className="active-menu" />
            </li>
        </ul>
    )
}

export default PacientePerfilNav
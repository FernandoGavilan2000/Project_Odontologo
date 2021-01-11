import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacientePerfil.css'
import PacientePerfilInfo from './PacientePerfilInfo'
import PacientePerfilNav from './PacientePerfilNav'

import PacienteMenuCitas from './PacienteMenuCitas'
import PacienteMenuDatPersonales from './PacienteMenuDatPersonales'
import PacienteMenuFacturacion from './PacienteMenuFacturacion'
import PacienteMenuOdontograma from './PacienteMenuOdontograma'
import PacienteMenuPlanesTrat from './PacienteMenuPlanesTrat'

function PacientePerfil() {
    return (
        <div id="pacientePerfilContenedor" className="paciente-perfil-contenedor paciente-container">
            <div className="paciente-menu">
                <PacientePerfilInfo></PacientePerfilInfo>
                <PacientePerfilNav></PacientePerfilNav>
            </div>

            <div id="pacientePerfilMenus" className="paciente-perfil-menus">
                <PacienteMenuCitas></PacienteMenuCitas>
                <PacienteMenuDatPersonales></PacienteMenuDatPersonales>
                <PacienteMenuFacturacion></PacienteMenuFacturacion>
                <PacienteMenuOdontograma></PacienteMenuOdontograma>
                <PacienteMenuPlanesTrat></PacienteMenuPlanesTrat>
            </div>
        </div>
    )
}

export default PacientePerfil
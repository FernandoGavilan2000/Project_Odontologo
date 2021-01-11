import React from 'react';
import '../../../styles/Odontologo/Contenedor.css'

// Menus: Inicio , Horarios, Pacientes
import Inicio from '../Inicio/Inicio.js'
import Horario from '../Horario/Horario.js'
import Pacientes from '../Pacientes/Pacientes.js'

import PacientePerfil from '../Pacientes/PacientePerfil.js'

function Contenedor() {
    return (
        <div id="contenedorPrincipal">
            {/* <Inicio></Inicio> */}
            {/* <Horario></Horario> */}
            {/* <Pacientes></Pacientes> */}
            <PacientePerfil></PacientePerfil>
        </div>
    )
}

export default Contenedor;
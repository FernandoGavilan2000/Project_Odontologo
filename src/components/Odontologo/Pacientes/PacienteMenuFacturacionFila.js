import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuFacturacionFila.css'

import see from '../../../assets/images/see.svg'


function PacienteMenuFacturacionFila() {
    return (
        <div className="paciente-menu-facturacion-fila">
            {/* Plan de Tratamiento */}
            <p>Ordodoncia</p>

            {/* Total a pagar */}
            <p>s/3 400.00</p>

            {/* Total Pagado */}
            <p>s/1 400.00</p>

            {/* Pago Restante */}
            <p>s/2 000.00</p>

            {/* Estado */}
            <p>Faltante</p>

            {/* Ver Detalles */}
            <div>
                <a>
                    <img src={see} alt="see" />
                    <span>Ver Perfil</span>
                </a>
            </div>
        </div>
    )
}

export default PacienteMenuFacturacionFila;
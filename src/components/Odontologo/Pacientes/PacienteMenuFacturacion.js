import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuFacturacion.css'
import PacienteMenuFacturacionFila from './PacienteMenuFacturacionFila'

function PacienteMenuFacturacion() {
    return (
        <div id="pacienteMenuFacturacion" className="paciente-menu-facturacion">
            <div className="facturacion-tabla-top">
                <h4>Plan de Tratamiento</h4>
                <h4>Total a pagar</h4>
                <h4 className="blue" >Total Pagado</h4>
                <h4 className="red" >Pago Restante</h4>
                <h4>Estado</h4>
                <h4>Detalles</h4>
            </div>
            <div className="facturacion-tabla-datos contenedor-scroll">
                <PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
                <PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
                <PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
                <PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
                <PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
                <PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
                <PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
                <PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
                <PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
                <PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
                <PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
                <PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
                <PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
                <PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
                <PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
            </div>
        </div>
    )
}

export default PacienteMenuFacturacion
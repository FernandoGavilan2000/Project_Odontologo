import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuFacturacionFila.css';

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
			{/* <div>
                <Link to="/app/pacientes/:id">
                    <img src={see} alt="see" />
                    <span>Ver Perfil</span>
                </Link>
            </div> */}
		</div>
	);
}

export default PacienteMenuFacturacionFila;

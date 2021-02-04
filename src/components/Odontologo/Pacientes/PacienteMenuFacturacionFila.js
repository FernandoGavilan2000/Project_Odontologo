import React from 'react';
import '../../../styles/Odontologo/Pacientes/PacienteMenuFacturacionFila.css';

function PacienteMenuFacturacionFila({ factura }) {
	return (
		<div className="paciente-menu-facturacion-fila">
			{/* Plan de Tratamiento */}
			<p>{factura.f_id}</p>

			{/* COD Tratamiento Paciente*/}
			<p>{factura.f_tpid}</p>

			{/* Total  a Pagar  */}
			<p>s/ {factura.f_topay}</p>

			{/* Pago Restante */}
			<p>s/ {factura.f_total}</p>

			{/* Estado */}
			<p>{factura.f_status}</p>

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

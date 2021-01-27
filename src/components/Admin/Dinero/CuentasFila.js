import React from 'react';

function CuentasFila() {
	return (
		<div className="cuentas-fila">
			{/* Nombre de paciente */}
			<p>Annette Black</p>

			{/* Codigo de pago */}
			<p>4008</p>

			{/* Fecha de Emision */}
			<p>20/10/2020</p>

			{/* Total a pagar */}
			<p>s/1 400.00</p>

			{/* Pago pagado */}
			<p>s/800.00</p>

			{/* Pago faltante */}
			<p>s/600.00</p>
		</div>
	);
}

export default CuentasFila;

import React from 'react';
import '../../../styles/Admin/Cuentas.css'
import CuentasFila from './CuentasFila'


export const Cuentas = () => {
	return (
		<div id="cuentasSeccion" className="cuentas-seccion" >
			<h2>Cuentas que deben</h2>
			<div className="cuentas-tabla contenedor-scroll">
				<div className="cuentas-tabla-top">
					<h4>Pacientes</h4>
					<h4>Cod. de Pago</h4>
					<h4>F. de Emision</h4>
					<h4>Total a pagar</h4>
					<h4 className="blue" >Total Pagado</h4>
					<h4 className="red" >Pago Restante</h4>
				</div>
				<div className="cuentas-tabla-datos">
					<CuentasFila></CuentasFila>
					<CuentasFila></CuentasFila>
					<CuentasFila></CuentasFila>
					<CuentasFila></CuentasFila>
					<CuentasFila></CuentasFila>
					<CuentasFila></CuentasFila>
					<CuentasFila></CuentasFila>
					<CuentasFila></CuentasFila>
					<CuentasFila></CuentasFila>
					<CuentasFila></CuentasFila>
					<CuentasFila></CuentasFila>
					<CuentasFila></CuentasFila>
					<CuentasFila></CuentasFila>
					<CuentasFila></CuentasFila>
					<CuentasFila></CuentasFila>
					<CuentasFila></CuentasFila>
				</div>
			</div>
		</div>
	);
};

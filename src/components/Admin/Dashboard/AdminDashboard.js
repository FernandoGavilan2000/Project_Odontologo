import React from 'react';
import '../../../styles/Admin/AdminDashboard.css';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
	{
		name: 'Ago',
		cantidad: 5600,
	},
	{
		name: 'Set',
		cantidad: 8200,
	},
	{
		name: 'Oct',
		cantidad: 9303,
	},
	{
		name: 'Nov',
		cantidad: 2781,
	},
	{
		name: 'Dic',
		cantidad: 5690,
	},
	{
		name: 'Ene',
		cantidad: 2387,
	},
];
export const AdminDashboard = () => {
	return (
		<div className="main__container">
			<div className="main__title">
				<img src="assets/hello.svg" alt="" />
				<div className="main__greeting">
					<h1>
						Bienvenido: <span>Fernando</span>
					</h1>
					<p>Resumen Activos :</p>
				</div>
			</div>

			<div className="main__cards">
				<div className="card">
					<i className="fa fa-user-o fa-2x text-lightblue" aria-hidden="true"></i>
					<div className="card_inner">
						<p className="text-primary-p">Número de Doctores</p>
						<span className="font-bold text-title">8</span>
					</div>
				</div>

				<div className="card">
					<i className="fa fa-calendar fa-2x text-red" aria-hidden="true"></i>
					<div className="card_inner">
						<p className="text-primary-p">Número de Pacientes</p>
						<span className="font-bold text-title">67</span>
					</div>
				</div>

				<div className="card">
					<i className="fa fa-video-camera fa-2x text-yellow" aria-hidden="true"></i>
					<div className="card_inner">
						<p className="text-primary-p">Número de Tratamientos</p>
						<span className="font-bold text-title">340</span>
					</div>
				</div>
			</div>

			<div className="charts">
				<div className="charts__left">
					<div className="charts__left__title">
						<div>
							<h1>Ganancias</h1>
							<p>Gráfico de los últimos 6 meses</p>

							<BarChart
								width={500}
								height={400}
								data={data}
								margin={{
									top: 20,
									right: 20,
									left: 20,
									bottom: 5,
								}}
							>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Legend />
								<Bar dataKey="cantidad" fill=" #4670f4" />
							</BarChart>
						</div>
					</div>
					<div id="apex1"></div>
				</div>

				<div className="charts__right">
					<div className="charts__right__title">
						<div>
							<h1></h1>
							<p>Solicitudes Pendientes :</p>
						</div>
						<i className="fa fa-usd" aria-hidden="true"></i>
					</div>

					<div className="charts__right__cards">
						<div className="card1">
							<p className="txt_chartDelete">
								<b>Eliminar</b>
							</p>
							<h3>
								<b>
									Solicitud Num : <span> 103454</span>
								</b>
							</h3>
							<p className="txt_chart">
								<b>Nombre:</b> <span>Luis Martinez Hernandez</span>
							</p>
							<p className="txt_chart">
								<b>Telef:</b> <span>989 789 990</span>
							</p>
							<p className="txt_chartShowMore">
								<b>Ver Mas</b>
							</p>
						</div>

						<div className="card1">
							<p className="txt_chartDelete">
								<b>Eliminar</b>
							</p>
							<h3>
								<b>
									Solicitud Num : <span> 103455</span>
								</b>
							</h3>
							<p className="txt_chart">
								<b>Nombre:</b> <span>Luis Martinez Hernandez</span>
							</p>
							<p className="txt_chart">
								<b>Telef:</b> <span>989 789 990</span>
							</p>
							<p className="txt_chartShowMore">
								<b>Ver Mas</b>
							</p>
						</div>

						<div className="card1">
							<p className="txt_chartDelete">
								<b>Eliminar</b>
							</p>
							<h3>
								<b>
									Solicitud Num : <span> 103456</span>
								</b>
							</h3>
							<p className="txt_chart">
								<b>Nombre:</b> <span>Luis Martinez Hernandez</span>
							</p>
							<p className="txt_chart">
								<b>Telef:</b> <span>989 789 990</span>
							</p>
							<p className="txt_chartShowMore">
								<b>Ver Mas</b>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

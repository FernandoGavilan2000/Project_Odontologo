import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
export const DashboardChart = () => {
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
	return (
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
	);
};

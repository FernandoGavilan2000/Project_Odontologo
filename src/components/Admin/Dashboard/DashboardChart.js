import React, { useState, useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { getMonthsChart } from '../../../helpers/Backend/Dashboard/getMonthsChart';
import { MiniSpinner } from '../../Tools/MiniSpinner';

/*
const data = [
	{
		name: 'Ago',
		cantidad: null,
	},
	{
		name: 'Set',
		cantidad: null,
	},
	{
		name: 'Oct',
		cantidad: null,
	},
	{
		name: 'Nov',
		cantidad: null,
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
*/

export const DashboardChart = () => {
	const [Data, setData] = useState(null);

	const _isMounted = useRef(true);

	useEffect(() => {
		getMonthsChart()
			.then((data) => {
				if (_isMounted.current) {
					setData(data);
				}
			})
			.catch((error) => {
				console.info('No se pudo encontrar los meses-chart', error);
			});

		return () => {
			_isMounted.current = false;
		};
	}, []);
	return (
		<div className="charts__left">
			<div className="charts__left__title">
				<div>
					<h1>Ganancias</h1>
					<p>Gráfico de los últimos 6 meses</p>

					{Data ? (
						<BarChart
							width={500}
							height={400}
							data={Data}
							margin={{
								top: 20,
								right: 20,
								left: 20,
								bottom: 5,
							}}
						>
							<CartesianGrid strokeDasharray="3 3" />
							<XAxis dataKey="Mes" />
							<YAxis />
							<Tooltip />
							<Legend />
							<Bar dataKey="total" fill=" #4670f4" />
						</BarChart>
					) : (
						<MiniSpinner />
					)}
				</div>
			</div>
			<div id="apex1"></div>
		</div>
	);
};

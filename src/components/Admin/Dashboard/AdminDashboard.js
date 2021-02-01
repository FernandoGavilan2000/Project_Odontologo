import React from 'react';
import '../../../styles/Admin/AdminDashboard.css';
import { DashboardChart } from './DashboardChart';
import { DashboardDetails } from './DashboardDetails';
import { DashboardTask } from './DashboardTask';

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

			<DashboardDetails />

			<div className="charts">
				<DashboardChart />
				<DashboardTask />
			</div>
		</div>
	);
};

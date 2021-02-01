import React from 'react';
import { CountDoctors } from './CountDoctors';
import { CountPatients } from './CountPatients';
import { CountTratamientos } from './CountTratamientos';

export const DashboardDetails = () => {
	return (
		<div className="main__cards">
			<CountDoctors />
			<CountPatients />
			<CountTratamientos />
		</div>
	);
};

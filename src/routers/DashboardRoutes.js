import React from 'react';
import { AdminRouter } from './AdminRouter';
import { OdontologoRouter } from './OdontologoRouter';

export const DashboardRoutes = ({ isTypeUser }) => {
	if (isTypeUser === 'odontologo') {
		return <OdontologoRouter />;
	}
	if (isTypeUser === 'admin') {
		return <AdminRouter />;
	}
};

import React from 'react';

import { BarraLateralAdmin } from '../components/Admin/components/BarraLateralAdmin';
import { ContenedorAdmin } from '../components/Admin/components/ContenedorAdmin';

export const AdminRouter = () => {
	return (
		<>
			<BarraLateralAdmin />
			<ContenedorAdmin />
		</>
	);
};

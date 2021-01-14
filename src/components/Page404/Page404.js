import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Page404/Page404.css';

export const Page404 = () => {
	return (
		<div id="notfound">
			<div class="notfound">
				<div class="notfound-bg">
					<div></div>
					<div></div>
					<div></div>
				</div>
				<h1>oops!</h1>
				<h2>Error 404 : Página No Encontrada</h2>
				<p>La ruta especificada No Existe.</p>
				<NavLink to="/">Volver al Home!</NavLink>
			</div>
		</div>
	);
};

import React from 'react';

function DoctorCard() {
	return (
		<div className="card-doctor">
			<img
				src="https://images.unsplash.com/photo-1588776813677-77aaf5595b83?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZG9jdG9yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
				alt="doctor-perfil"
			/>
			<h4>Medico Cirujano</h4>
			<p className="doctor-name">Annetter Kathyrn</p>
			<p className="doctor-code">
				{' '}
				Codigo: <span>6514-1622</span>
			</p>
		</div>
	);
}

export default DoctorCard;

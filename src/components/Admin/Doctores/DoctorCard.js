import React from 'react';

function DoctorCard({ doctor }) {
	return (
		<div className="card-doctor">
			<p className="doctor-code">
				{' '}
				Codigo: <span>{doctor.d_id}</span>
			</p>
			<img
				src="https://www.rockandpop.cl/wp-content/uploads/2020/07/bc718c33a41936bd35592e00e1ed6b65-768x512.jpg"
				alt="doctor-perfil"
			/>
			<h4>{doctor.d_branch}</h4>
			<p className="doctor-name">{`${doctor.d_lastname} ${doctor.d_name}`}</p>
			<p className="doctor-code">
				{' '}
				<span>{doctor.d_email}</span>
			</p>
			<p className="doctor-code">
				{' '}
				<span>Tel: {doctor.d_cellphone}</span>
			</p>
		</div>
	);
}

export default DoctorCard;

import React from 'react';

function DoctorCard({ doctor }) {
	return (
		<div className="card-doctor">
			<p className="doctor-code">
				{' '}
				Codigo: <span>{doctor.d_id}</span>
			</p>
			<img src={doctor.d_img} alt="doctor-perfil" />
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

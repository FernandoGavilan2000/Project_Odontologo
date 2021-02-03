import '../../styles/Admin/Doctores.css';
import Swal from 'sweetalert2';
export const ShowPatient = (Patient) => {
	Swal.fire({
		title: `${Patient.p_lastname} ${Patient.p_name}`,
		text: `COD: ${Patient.p_id}`,
		imageUrl: `${Patient.p_img}`,
		imageWidth: 250,
		showConfirmButton: false,
		imageAlt: 'Paciente Img_Perfil',
		width: 350,
	});
};

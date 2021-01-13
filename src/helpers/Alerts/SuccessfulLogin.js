import Swal from 'sweetalert2';

export const SuccesfullLogin = () => {
	const Exito = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3000,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer);
			toast.addEventListener('mouseleave', Swal.resumeTimer);
		},
	});

	return Exito.fire({
		icon: 'success',
		title: 'Succesfull Login',
	});
};

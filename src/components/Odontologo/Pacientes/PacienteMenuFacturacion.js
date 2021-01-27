import React from 'react';
//import { useHistory } from 'react-router-dom';
import '../../../styles/Odontologo/Pacientes/PacienteMenuFacturacion.css';
import PacienteMenuFacturacionFila from './PacienteMenuFacturacionFila';
//import { Spinner } from '../../Tools/Spinner';
//import Swal from 'sweetalert2';

function PacienteMenuFacturacion() {
	/*
	const [Citas, setCitas] = useState(null);
	const _isMounted = useRef(true);
	const history = useHistory();

	useEffect(() => {
		SearchFacturas(Patient)
			.then((dataPacient) => {
				if (_isMounted.current) {
					setCitas(dataPacient);
				}
			})
			.catch((error) => {
				console.info('No se pudo encontrar las Citas del Paciente', error);
				Swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'No hay registro de citas!',
				});
				history.replace(`/app/pacientes/${Patient}`);
			});

		return () => {
			_isMounted.current = false;
		};
	}, []);
	const SearchFacturas = async (id_paciente) => {
		const response = await fetch(
			`${process.env.REACT_APP_API_URL}/api/citas/paciente/${id_paciente}`,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
		);
		return await response.json();
    };
    */
	return (
		<div id="pacienteMenuFacturacion" className="paciente-menu-facturacion">
			<div className="facturacion-tabla-top">
				<h4>Plan de Tratamiento</h4>
				<h4>Total a pagar</h4>
				<h4 className="blue">Total Pagado</h4>
				<h4 className="red">Pago Restante</h4>
				<h4>Estado</h4>
				<h4>Detalles</h4>
			</div>
			<div className="facturacion-tabla-datos contenedor-scroll">
				<PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
				<PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
				<PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
				<PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
				<PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
				<PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
				<PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
				<PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
				<PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
				<PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
				<PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
				<PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
				<PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
				<PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
				<PacienteMenuFacturacionFila></PacienteMenuFacturacionFila>
			</div>
		</div>
	);
}

export default PacienteMenuFacturacion;

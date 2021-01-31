import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Home/Home.css';

import { AlertForm } from '../../helpers/Alerts/HomeForm';
import Swal from 'sweetalert2';

//Images
import mainBackground from '../../assets/images/main-background.png';
import ortodoncia from '../../assets/images/ortodoncia.png';
import implantes from '../../assets/images/implantes.png';
import odontopediatria from '../../assets/images/odontopediatria.png';
import esteticaDental from '../../assets/images/estetica-dental.png';
import protesis from '../../assets/images/protesis.png';
import halitosis from '../../assets/images/halitosis.png';
import quienesSomos from '../../assets/images/quienes-somos.png';
import testimonio1 from '../../assets/images/testimonio1.png';
import testimonio2 from '../../assets/images/testimonio2.png';
import testimonio3 from '../../assets/images/testimonio3.png';
import quotation from '../../assets/images/quotation.svg';
import logoHorizontal from '../../assets/images/logo-horizontal.svg';
import { NewSolicitud } from '../../helpers/Backend/NewSolicitud';

export const HomeScreen = () => {
	const handleSubmit = async () => {
		try {
			let form = await AlertForm();
			if (form.isConfirmed) {
				if (form.value[0].length >= 4 && form.value[1].length >= 8) {
					Swal.fire({
						title: 'Procesando Solicitud',
						text: 'Por favor espere...',
						allowOutsideClick: false,
						showCancelButton: false,
						showConfirmButton: false,
						willOpen: () => {
							Swal.showLoading();
						},
					});
					NewSolicitud(form.value[0], form.value[1], form.value[2])
						.then((response) => {
							Swal.fire({
								icon: 'success',
								title: 'SOLICITUD REGISTRADA!',
								text: 'Se registro la solicitud correctamente',
							});
						})
						.catch((error) => {
							Swal.fire({
								icon: 'error',
								title: 'Oopsss',
								text: 'No se puedo procesar su solicitud!',
							});
						});
				} else {
					Swal.fire({
						icon: 'warning',
						title: 'Ingrese los datos correctamente',
						text: 'No se puede procesar su solicitud!',
					});
				}
			}
		} catch (error) {
			Swal.fire({
				icon: 'error',
				title: 'Oopsss',
				text: 'No se puedo procesar su solicitud!',
			});
		}
	};

	return (
		<div className="Home-Container">
			<div className="nav-section section">
				<div className="nav-container main-container">
					<div className="nav-logo">
						<img src={logoHorizontal} alt="logo-horizontal" />
					</div>
					<div className="nav-links">
						<div>
							<a href="#heroSection">Inicio</a>
						</div>
						<div>
							<a href="#servicesSection">Servicios</a>
						</div>
						<div>
							<a href="#nosotrosSection">Nosotros</a>
						</div>
						<div>
							<a href="#testimoniosSection">Testimonios</a>
						</div>
						<div>
							<NavLink to="/login">Login o Volver</NavLink>
						</div>
					</div>
				</div>
			</div>
			<div id="heroSection" className="hero-section section">
				<div className="hero-container main-container">
					<div className="title">
						<h1>Cambiamos vidas, No solo sonrisas</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolore
							consequuntur veritatis eligendi! Dolores, dicta.
						</p>
						<button onClick={handleSubmit}>Quiero reservar mi cita</button>
					</div>
					<div className="hero-image">
						<img src={mainBackground} alt="mainbackground" />
					</div>
				</div>
			</div>
			<div id="servicesSection" className="services-section section">
				<div className="services-container main-container">
					<h2>Nuestros servicios</h2>
					<div className="services-grid">
						<div className="service">
							<div className="service-img">
								<img src={ortodoncia} alt="ortodoncia" />
								<div className="overlay"></div>
							</div>
							<h3>Ortodoncia</h3>
							<p>
								Los tratamientos de ortodoncia realizan suaves movimientos que desplazan
								los dientes de forma individual o en bloque y corrigen su colocación.
							</p>
						</div>
						<div className="service">
							<div className="service-img">
								<img src={implantes} alt="implantes" />
								<div className="overlay"></div>
							</div>
							<h3>Implantes</h3>
							<p>
								Nuestro servicio de implantología es realizado por odontólogos altamente
								cualificados que cuentan con la tecnología más avanzada.
							</p>
						</div>
						<div className="service">
							<div className="service-img">
								<img src={odontopediatria} alt="odontopediatría" />
								<div className="overlay"></div>
							</div>
							<h3>Odontopediatría</h3>
							<p>
								Es la rama de la Odontología encargada de tratar a los niños. Nosotros
								también nos encargamos de explorar y tratar a niños y adolescentes
							</p>
						</div>
						<div className="service">
							<div className="service-img">
								<img src={esteticaDental} alt="Estética Dental" />
								<div className="overlay"></div>
							</div>
							<h3>Estética Dental</h3>
							<p>
								Ponemos a su disposición diferentes tratamientos odontológicos sencillos e
								indoloros que te ayudarán a mejorar la salud y apariencia de su boca.
							</p>
						</div>
						<div className="service">
							<div className="service-img">
								<img src={protesis} alt="Prótesis" />
								<div className="overlay"></div>
							</div>
							<h3>Prótesis</h3>
							<p>
								Es el elemento artificial destinado a restaurar la anatomía de una o
								varias piezas dentarias.
							</p>
						</div>
						<div className="service">
							<div className="service-img">
								<img src={halitosis} alt="Halitosis" />
								<div className="overlay"></div>
							</div>
							<h3>Halitosis</h3>
							<p>
								Tambien conocido como mal aliento puede producirse por una deficiente
								higiene oral, el consumo de tabaco, alcohol, entre otras.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div id="nosotrosSection" className="nosotros-section section">
				<div className="nosotros-container main-container">
					<div className="nosotros-text">
						<h2>¿Quienes Somos?</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas tincidunt
							donec aliquet consequat viverra lectus. Mattis magnis phasellus cras
							phasellus eleifend ac aliquet. Tellus vulputate cursus proin arcu eget.
							Lorem sem tortor ante lectus eget. Nibh metus fringilla netus.
						</p>
					</div>
					<div className="nosotros-image">
						<img src={quienesSomos} alt="quienes-somos" />
					</div>
				</div>
			</div>
			<div id="testimoniosSection" className="testimonios-section section">
				<div className="testimonios-container main-container">
					<h2>¿Que dicen nuestros pacientes?</h2>
					<div className="testimonios-grid">
						<div className="testimonio">
							<div className="paciente">
								<img src={testimonio1} alt="testimonio1" />
								<div className="datos">
									<p>Jane Cooper</p>
									<p>18 años</p>
								</div>
								<img src={quotation} alt="quotation" />
							</div>
							<p className="testimonio-text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quas autem
								ad dolores magnam? Quasi culpa repudiandae repellendus cum molestiae?
							</p>
						</div>
						<div className="testimonio">
							<div className="paciente">
								<img src={testimonio2} alt="testimonio2" />
								<div className="datos">
									<p>Robert Fox</p>
									<p>24 años</p>
								</div>
								<img src={quotation} alt="quotation" />
							</div>
							<p className="testimonio-text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quas autem
								ad dolores magnam? Quasi culpa repudiandae repellendus cum molestiae?
							</p>
						</div>
						<div className="testimonio">
							<div className="paciente">
								<img src={testimonio3} alt="testimonio3" />
								<div className="datos">
									<p>Esther Howard</p>
									<p>41 años</p>
								</div>
								<img src={quotation} alt="quotation" />
							</div>
							<p className="testimonio-text">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quas autem
								ad dolores magnam? Quasi culpa repudiandae repellendus cum molestiae?
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* <div
				className="Home_presentation"
				style={{ backgroundImage: 'url(' + Background + ')' }}
			>
				<h1>DentalHealth</h1>
				<p>Reserva una cita , Totalmente Gratis</p>
				<button onClick={handleSubmit}>Ingresa Aqui</button>
			</div>

			<h1>Despues todo el Contenido...</h1> */}
		</div>
	);
};

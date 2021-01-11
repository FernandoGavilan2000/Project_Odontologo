import React from "react";
import "../../../styles/Odontologo/BarraLateral.css"

//Icons
import logo from '../../../assets/images/logo.svg'
import home from '../../../assets/images/home.svg'
import calendar from '../../../assets/images/calendar.svg'
import patients from '../../../assets/images/patients.svg'
import profile from '../../../assets/images/profile.svg'
import logout from '../../../assets/images/logout.svg'


function BarraLateral() {
    return (
        <ul id="sideBar" className="nav-bar">
            <img src={logo} className="logo" alt="logo" />
            <li className="nav-item">
                <a href="nav-link">
                    <span>Inicio</span>
                    <img src={home} alt="home" />
                </a>
            </li>
            <li className="nav-item">
                <a href="/#">
                    <span>Horarios</span>
                    <img src={calendar} alt="calendar" />
                </a>
            </li>
            <li className="nav-item">
                <a href="/#">
                    <span>Pacientes</span>
                    <img src={patients} alt="patients" />
                </a>
            </li>
            <div className="user-doctor">
                {/* <!-- Doctor Picture --> */}
                <img src="https://plataformas.news/online/nota_the-good-doctor-posiciona-sony-channel-en-la-region.jpg" alt="doctor" className="doctor-picture" />
                {/* <!-- Doctor Name --> */}
                <h3 className="doctor-name">Courtney Henry</h3>
                <a href="/#" className="nav-link nav-link-profile nav-link-ver-perfil">
                    <img src={profile} alt="profile" />
                    <span>Ver Perfil</span>
                </a>
                <a href="/#" className="nav-link nav-link-profile nav-link-cerrar-sesion">
                    <img src={logout} alt="log-out" />
                    <span>Cerrar Sesión</span>
                </a>
            </div>
        </ul>
    )
}

export default BarraLateral;
import React, { useState } from 'react'
import { Fade as Hamburger } from 'hamburger-react'
import './Navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {

    // const [isOpen, setOpen] = useState(false);


    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white shadow p-3 fixed-top">
                <div className="container">
                    <Link to="/" class="navbar-brand" style={{ fontSize: '30px' }}>PATHO<span style={{ color: 'red', fontWeight: 'bold' }}>LOGY</span></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={{ border: 'none' }}>
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link to="home"
                                    className="nav-link ml-3"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >HOME</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="about"
                                    className="nav-link ml-3"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >ABOUT</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="services"
                                    className="nav-link ml-3"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >SERVICES</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="appoinment"
                                    className="nav-link ml-3"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >APPOINTMENT</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="gallary"
                                    className="nav-link ml-3"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >GALLARY</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="doctor"
                                    className="nav-link ml-3"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >DOCTOR</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="contact"
                                    className="nav-link ml-3"
                                    activeClass="active"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar

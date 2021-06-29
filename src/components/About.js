import React, { useEffect } from 'react';
import './About.css';
import Aos from 'aos';


const About = () => {

    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 3000,
        })
    })
    return (

        <div id="about">
            <h1 className="text-center" >About Us</h1><br />
            <i class="fas fa-heart-rate" ></i><br />
            <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p><br />
            <div className="container mt-3" >
                <div className="row">
                    <div className="col-lg-6" data-aos="fade-up" style={{ padding: '55px' }}>
                        <h3>Welcome to PATHOLOGY Lab</h3>
                        <p>Fusce convallis ante id purus sagittis malesuada. Sed erat ipsum, suscipit sit amet auctor quis, vehicula ut leo. Maecenas felis nulla, tincidunt ac blandit a, consectetur quis elit. Nulla ut magna eu purus cursus sagittis. Praesent fermentum tincidunt varius. Proin sit amet tempus magna. Fusce pellentesque vulputate urna.</p>
                        <p>Fusce convallis ante id purus sagittis malesuada. Sed erat ipsum, suscipit sit amet auctor quis, vehicula ut leo. Maecenas felis nulla, tincidunt ac blandit a, consectetur quis elit. Nulla ut magna eu purus cursus sagittis. Praesent fermentum tincidunt varius. Proin sit amet tempus magna. Fusce pellentesque vulputate urna.</p>
                        <button className="btn btn-outline-success mb-2">Read More</button>
                    </div>
                    <div className="col-lg-6" data-aos="fade-up">
                        <img className="images shadow-md" src="https://cdn.pixabay.com/photo/2014/12/10/20/48/laboratory-563423_960_720.jpg" class="d-block w-100" alt="..." style={{ height: '450px', border: '1px solid blue' }} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About

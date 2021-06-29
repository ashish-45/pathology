import React, { useEffect } from 'react'
import Aos from 'aos';
import slider2 from '../images/slider2.jpg';

const Home = () => {

    useEffect(() => {
        Aos.init({
            offset: 100,
            duration: 1000,
        });
    });

    return (
        <div id="home">
            <div id="carouselExampleCaptions" class="carousel slide " data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={slider2} class="d-block w-100" alt="..." style={{ height: '750px' }} />
                        <div class="carousel-caption d-none d-block " data-aos="fade-up" style={{ marginBottom: '150px' }}>
                            <h1 style={{ color: 'white' }}>Welcome To Pathology Lab</h1>
                            <p style={{ color: 'white' }}>Some representative placeholder content for the first slide.</p>
                            <button className="btn btn-primary shadow-none">CONTACT US</button>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.pexels.com/photos/208512/pexels-photo-208512.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="d-block w-100" alt="..." style={{ height: '750px' }} />
                        <div class="carousel-caption d-none d-block " data-aos="fade-up" style={{ marginBottom: '150px' }}>
                            <h1 style={{ color: 'white' }}>We Are The Expert In The Field Of Health Lab</h1>
                            <p style={{ color: 'white' }}>Some representative placeholder content for the second slide.</p>
                            <button className="btn btn-success shadow-none">APPOINMENT</button>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true" ></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Home

import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div id="services">
            <div style={{ backgroundColor: '#ebece9' }}>
                <section class="header-extra" id="service">
                    <h1 style={{ textAlign: 'center', marginTop: '60px' }}>Services</h1><br />
                    <i class="fas fa-heart-rate" ></i>
                    <div class="container mt-5">
                        <div class="row">
                            <div class="extra-div col-lg-4 col-md-4 col-12 mt-2 shadow-sm p-3 mb-5" id="extra-div" data-aos="fade-up"
                                data-aos-duration="3000">
                                <a href="#"><img src="https://html.design/demo/thrine/images/s1.png" alt="img"
                                /></a>
                                <h2 className="text-center">Cardiology</h2>
                                <p className="text-center"> As for you,Your website can help you generate business, increase brand recall value, promote goodwill in
                                    front of customers and target audience, as well as deliver strong marketing messages.
                                </p>
                            </div>
                            <div class="extra-div col-lg-4 col-md-4 col-12 mt-2 shadow-sm p-3 mb-5" id="extra-div" data-aos="fade-up"
                                data-aos-duration="3000">
                                <a href="#"><img src="https://html.design/demo/thrine/images/s2.png" alt="img"
                                /></a>
                                <h2 className="text-center"> Diagnosis</h2>
                                <p className="text-center"> if your brand is rated 5-star on review sites like FourSquare or Yelp, people expect to see your website
                                    to get more information about the brand. Since prospective buyers are already looking for you online
                                    .</p>
                            </div>
                            <div class="extra-div col-lg-4 col-md-4 mt-2 shadow-sm p-3 mb-5 " id="extra-div" data-aos="fade-up"
                                data-aos-duration="3000">
                                <a href="#"><img src="https://html.design/demo/thrine/images/s3.png" alt="img"
                                /></a>
                                <h2 className="text-center">Surgery</h2>
                                <p className="text-center">you can not only display your offerings with features but also provide short video tutorials or
                                    downloadable PDF instructions. You can also highlight your awards, testimonials and all the features that.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default Services

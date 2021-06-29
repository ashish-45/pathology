import React from 'react'

const Contact = () => {
    return (
            <div id="contact">
                <div className="container">
                    <h1 className="text-center mt-5">Contact Us</h1>
                    <i class="fas fa-heart-rate" ></i><br /><br />
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <form>
                                <div class="form-row">
                                    <div class="form-group col-md-6">
                                        <input type="text" class="form-control shadow-none" id="inputEmail4" placeholder="Your Name" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <input type="text" class="form-control shadow-none" id="inputPassword4" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <input type="email" class="form-control shadow-none" id="inputAddress" placeholder="Email" style={{ fontWeight: 'bold' }} /><br />
                                <textarea name="area" className="form-control shadow-none" placeholder="Message" style={{ height: '200px', fontWeight: 'bold' }} />
                            </form><br />
                            <button type="submit" class="btn btn-outline-primary btn-block mb-2 shadow-none">Send Message</button>
                        </div>
                        {/* <div className="col-lg-3">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.601532396192!2d73.10321291485346!3d19.21259868700966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be795ed7691bcfd%3A0xbef29dae1165c82c!2sPathology%20Laboratory!5e0!3m2!1sen!2sin!4v1623931839953!5m2!1sen!2sin" style={{height:'400px', width:'600px'}}></iframe>
                    </div> */}
                    </div>
                </div>
                <div className="bg-dark p-2">
                    <p className="text-center text-white mt-3 font-weight-bold">@ Copyright by Rakesh Vanam 2021</p>
                </div>
            </div>
    )
}

export default Contact

import React from 'react';
import './Doctor.css';

const Doctor = () => {
    return (
        <div  id="doctor">
            <h1 className="text-center mt-5">Doctors</h1>
            <i class="fas fa-heart-rate" ></i>
            <div className="container mt-5">
                <div className="row mb-5">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt-4">
                        <img src="https://html.design/demo/health_lab/images/img-1.jpg" alt="" className="img-fluid  shadow-md" style={{ height: '400px', border: '3px solid skyblue', display: 'flex', justifyContent: 'center', margin: 'auto' }} />
                        <h3 className="text-center mt-3">Willimson Walter</h3>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt-4 ">
                        <img src="https://html.design/demo/health_lab/images/img-2.jpg" alt="" className="img-fluid  shadow-md" style={{ height: '400px', border: '3px solid skyblue', display: 'flex', justifyContent: 'center', margin: 'auto' }} />
                        <h3 className="text-center mt-3">Steven Com</h3>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt-4 ">
                        <img src="https://html.design/demo/health_lab/images/img-3.jpg" alt="" className="img-fluid  shadow-md" style={{ height: '400px', border: '3px solid skyblue', display: 'flex', justifyContent: 'center', margin: 'auto' }} />
                        <h3 className="text-center mt-3">Joseph Alzari</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Doctor

import React from 'react';
import './Gallary.css';

const Gallary = () => {
    return (
            <div  id="gallary">
                <h1 className="text-center ">Gallary</h1>
                <i class="fas fa-heart-rate" ></i>
                <div className="row mr-2 ml-2 mb-3 mt-5">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 mt-4 ">
                        <img src="https://html.design/demo/health_lab/images/gallery-02.jpg" alt="" className="img-fluid  shadow-lg p-3" style={{ border: '1px solid black' }} />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 mt-4 ">
                        <img src="https://html.design/demo/health_lab/images/gallery-01.jpg" alt="" className="img-fluid  shadow-lg p-3" style={{ border: '1px solid black' }} />

                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 mt-4">
                        <img src="https://html.design/demo/health_lab/images/gallery-03.jpg" alt="" className="img-fluid  shadow-lg p-3" style={{ border: '1px solid black' }} />

                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 mt-4">
                        <img src="https://html.design/demo/health_lab/images/gallery-04.jpg" alt="" className="img-fluid  shadow-lg p-3" style={{ border: '1px solid black' }} />

                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 mt-4">
                        <img src="https://html.design/demo/health_lab/images/gallery-05.jpg" alt="" className="img-fluid  shadow-lg p-3" style={{ border: '1px solid black' }} />

                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 mt-4 ">
                        <img src="https://html.design/demo/health_lab/images/gallery-06.jpg" alt="" className="img-fluid  shadow-lg p-3" style={{ border: '1px solid black' }} />

                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 mt-4">
                        <img src="https://html.design/demo/health_lab/images/gallery-07.jpg" alt="" className="img-fluid  shadow-lg p-3" style={{ border: '1px solid black' }} />

                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-12 mt-4">
                        <img src="https://html.design/demo/health_lab/images/gallery-08.jpg" alt="" className="img-fluid  shadow-lg p-3" style={{ border: '1px solid black' }} />

                    </div>
                </div>
            </div>
    )
}

export default Gallary;

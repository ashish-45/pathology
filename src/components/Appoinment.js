import React from 'react';
import './Appoinment.css';

const Appoinment = () => {
    return (
             <div className="backimg"  id="appoinment">
            <div className="container mt-5 shadow-lg p-3 mb-5 bg-white shadow-lg p-3"  >
                <h2>Book Appoinment</h2><br />
                <form>
                    <div class="row">
                        <div class="col-md-4 col-12">
                            <label className="label" for="inputEmail4">Patient Name</label>
                            <input type="text" class="form-control shadow-none" />
                        </div>
                        <div class="col-md-4 col-12">
                            <label className="label" for="inputEmail4">Doctor's Name</label>
                            <select name="select" class="form-control shadow-none">
                                <option selected>Doctor Name1</option>
                                <option selected>Doctor Name2</option>
                                <option selected>Doctor Name3</option>
                            </select>
                        </div>
                        <div class="col-md-4 col-12">
                            <label className="label" for="inputEmail4">Department's Name</label>
                            <select name="select" class="form-control shadow-none">
                                <option selected>Cardiology</option>
                                <option>Diagnosis</option>
                                <option>Surgery</option>
                            </select>
                        </div>
                    </div><br /><br />
                    <div class="row">
                        <div class="col-md-4 col-12">
                            <label className="label" for="inputEmail4">Phone Number</label>
                            <input type="text" class="form-control shadow-none" />
                        </div>
                        <div class="col-md-4 col-12">
                            <label className="label" for="inputEmail4">Symptoms</label>
                            <input type="text" class="form-control shadow-none" />
                        </div>
                        <div class="col-md-4 col-12">
                            <label className="label" for="inputEmail4">Choose Date</label>
                            <input type="date" class="form-control shadow-none" />
                        </div>
                    </div><br />
                    <button className="btn btn-outline-primary shadow-none">Submit Now</button>
                </form>
            </div>
        </div>       
    )
}

export default Appoinment;

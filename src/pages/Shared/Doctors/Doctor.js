
import { Link } from 'react-router-dom';
import './Doctor.css'

const Doctor = ({ doctor }) => {
    let { img, name, id } = doctor;


    return (
        <div id='appointment'>


            <div>





                <div className="doc-container">

                    <div className="card border-0 me-lg-4 mb-lg-0 mb-4">
                        <div className="backgroundEffect"></div>
                        <div className="pic"> <img className="" style={{ height: '200px' }} src={img} alt="" />
                            <div className="date"> <span className="day">26</span> <span className="month">June</span> <span className="year">2019</span> </div>
                        </div>
                        <div className="content">
                            <p className="h-1 mt-4">Dr. {name} </p>
                            <p className="text-muted mt-3">I'm a doctor here.My aim is to serve the patient not the money.Come to get best service.</p>
                            <div className="d-flex align-items-center justify-content-between mt-3 pb-3">
                                <Link to={`/doctors/${id}`}>
                                    <div className="btn btn-primary">Need Appointment<span className="fas fa-arrow-right"></span></div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );


};

export default Doctor;
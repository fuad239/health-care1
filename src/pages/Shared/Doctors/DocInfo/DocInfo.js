import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



const DocInfo = () => {
    const { userId } = useParams()
    const [selectDoc, setSelectDoc] = useState([])
    useEffect(() => {
        fetch("/doctors.json")
            .then(res => res.json())
            .then(data => setSelectDoc(data.find(doctor => doctor.id == userId)))
    }, []);

    return (
        <div>
            <div className="Info-card text-center ">
                <div className="card-header">
                    MBBS From, {selectDoc.city}
                </div>
                <div className="card-body">
                    <img src={selectDoc.img} style={{ borderRadius: '10px', height: '400px' }} className='mb-1' alt="" />
                    <h5 className="card-title">  Dr. {selectDoc.name} </h5>
                    <p className="card-text">I'm an MBBS doctor to give best medicine service to you.If you have any health problem ask for appointment.</p>

                </div>
                <div className="card-footer text-muted">
                    <Link to='/needappointment'>
                        <button className='btn btn-primary'>Need Appointment</button>
                    </Link>
                </div>
            </div>

        </div>
    );

};

export default DocInfo;
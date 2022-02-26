
import useDoctors from '../../../hooks/useDoctors';
import './Doctors.css'
import Doctor from './Doctor';


const Doctors = () => {
    const [doctors] = useDoctors()

    return (
        <div>
            <h4><i>Our Speacialists</i></h4>
            <div className='doc-parent mx-5' id='doctors'>

                {

                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)

                }
            </div>
        </div>
    );
};

export default Doctors;

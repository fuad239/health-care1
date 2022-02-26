import React from 'react';
import Doctor from '../../../../Shared/Doctors/Doctor';
import Doctors from '../../../../Shared/Doctors/Doctors';

const Appoinment = () => {
    return (
        <div>
            <h3 className='mt-2 mb-0 bg-primary p-1 text-white'>Select Doctor</h3>
            <hr className='mt-0' />
            <Doctors></Doctors>
        </div>
    );
};

export default Appoinment;
import React from 'react';
import useAuth from '../../../../../../hooks/useAuth';

const QuickCall = () => {
    const { user } = useAuth();
    return (
        <div className='bg-secondary p-2'>
            <h5 className='my-1 text-warning'>Don't worry {user.displayName},</h5>
            <div className='bg-secondary text-white p-1 text-center'  >


                <div>
                    <h4 className='my-1 '>Ambulance is coming..</h4>

                    <h5>24 Hour service Available</h5>
                </div>


            </div>


            <img src="https://i.ibb.co/R6TNDCn/ambulance-hospital.gif" className='my-0 bg-white' style={{ width: '100%', height: '550px' }} alt="" />

        </div>
    );
};

export default QuickCall;
import React from 'react';
import { Link } from 'react-router-dom';

const Icu = () => {
    return (
        <div>
            <h3>Operation Theater is being Ready..</h3>
            <Link to='/home'>
                <button className='btn btn-danger my-2'>Visit Home</button>
            </Link>
            <img className='w-100' src="https://i.ibb.co/hYX693S/Colored-flat-hospital-operation-composition-a-doctor-with-assistants-treat-a-person-vector-illustrat.jpg" alt="" />

        </div>
    );
};

export default Icu;
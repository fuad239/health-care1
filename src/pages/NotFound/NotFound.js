import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <img className='w-80' style={{ height: '500px' }} src="https://i.ibb.co/gwJSqxs/3828537.jpg" alt="" />
            <Link to='/home'>
                <button className='btn btn-danger'>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;
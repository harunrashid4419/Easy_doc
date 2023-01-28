import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

const Description = () => {
    return (
        <div className='col-span-3 bg-gray-100 p-5 text-gray-800'>
            <Outlet></Outlet>
        </div>
    );
};

export default Description;
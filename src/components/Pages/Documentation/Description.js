import React from 'react';
import { Outlet } from 'react-router-dom';

const Description = () => {
    return (
        <div className='col-span-3 bg-gray-100 p-5 text-gray-500'>
            <h1 className='text-center font-bold text-4xl'>Description</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Description;
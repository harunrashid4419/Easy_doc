import React from 'react';
import { Outlet } from 'react-router-dom';

const Description = () => {
    return (
        <div className='col-span-3 bg-neutral-content p-5 text-base-content'>
            <Outlet></Outlet>
        </div>
    );
};

export default Description;
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const RightSideBer = () => {


    return (
        <div className='col-span-3 bg-gray-100 p-5 text-gray-800'>
            <Outlet></Outlet>
        </div>
    );
};

export default RightSideBer;
import React from 'react';
import { Outlet } from 'react-router-dom';

const RightSideBar = () => {
    return (
        <div className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] col-span-3 rounded-lg p-10'>
            <Outlet></Outlet>
        </div>
    );
};

export default RightSideBar;
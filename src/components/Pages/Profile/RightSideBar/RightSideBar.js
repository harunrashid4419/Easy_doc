import React from 'react';
import { Outlet } from 'react-router-dom';

const RightSideBar = ({ edit, setEdit }) => {
    return (
        <div className='shadow-[0px_0px_40px_0px_rgba(0,0,0,0.3)]  col-span-3 rounded-lg p-5'>
            <Outlet></Outlet>
        </div>
    );
};

export default RightSideBar;
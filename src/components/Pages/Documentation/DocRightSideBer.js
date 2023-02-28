// import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

const DocRightSideBer = () => {


    return (
        <div className='lg:col-span-3 bg-neutral-content p-5 text-base-content'>
            <Outlet></Outlet>
        </div>
    );
};

export default DocRightSideBer;
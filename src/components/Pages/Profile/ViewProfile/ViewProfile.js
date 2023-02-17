import React from 'react';
import { useState } from 'react';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import RightSideBar from '../RightSideBar/RightSideBar';

const ViewProfile = () => {
    return (
        <div className='grid gap-y-10 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 my-10 md:gap-x-4 lg:gap-x-10 p-5 lg:p-10'>
            <LeftSideBar></LeftSideBar>
            <RightSideBar></RightSideBar>
        </div>
    );
};

export default ViewProfile;
import React from 'react';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import RightSideBar from '../RightSideBar/RightSideBar';
// import { FaUserAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

const ViewProfile = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 md:w-11/12 mx-auto my-10 md:gap-x-4 p-5'>
            <LeftSideBar></LeftSideBar>
            <RightSideBar></RightSideBar>
        </div>
    );
};

export default ViewProfile;
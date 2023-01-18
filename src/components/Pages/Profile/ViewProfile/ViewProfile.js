import React from 'react';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import RightSideBar from '../RightSideBar/RightSideBar';
// import { FaUserAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

const ViewProfile = () => {
    return (
        <div className='grid md:grid-cols-4 h-screen w-10/12 mx-auto my-10 gap-x-4'>
            <LeftSideBar></LeftSideBar>
            <RightSideBar></RightSideBar>
        </div>
    );
};

export default ViewProfile;
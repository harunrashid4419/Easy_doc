import React, { useContext } from 'react';
import { FaEdit } from 'react-icons/fa';
import { AuthContext } from '../../../../Context/UserContext';

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold text-purple-500'>My Profile</h1>
                <FaEdit className='hover:text-blue-500 hover:cursor-pointer w-12'></FaEdit>
            </div>
            <div className='flex gap-x-10 mt-4'>
                {/* this is image container */}
                <div>
                    <img src="https://placeimg.com/80/80/people" alt="" className='rounded-full w-32 h-32 my-6' />
                    <button className='btn btn-xs md:btn-sm'>Edit Profile</button>
                </div>
                {/* this is user information container */}
                <div className='space-y-4'>
                    <div>
                        <span className='text-sm font-semibold'>Full Name</span>
                        <p className='text-xl font-semibold'>{user?.displayName}</p>
                    </div>
                    <div>
                        <span className='text-sm font-semibold'>Email Address</span>
                        <p className='text-xl font-semibold'>{user?.email}</p>
                    </div>
                    <div>
                        <span className='text-sm font-semibold'>Phone Number</span>
                        <p className='text-xl font-semibold'>+088-123514552</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
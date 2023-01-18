import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ViewProfile = () => {
    return (
        <div className='grid md:grid-cols-4 h-screen w-10/12 mx-auto my-10 gap-x-4'>

            {/* this is left sidebar container*/}
            <div className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] text-center rounded-lg p-5'>
                <img src="https://placeimg.com/80/80/people" alt="" className='rounded-full w-20 h-20 mx-auto my-10' />
                <div className='font-bold'>
                    <div className='flex items-center gap-4'>
                        <FaUserAlt></FaUserAlt>
                        <Link>My Profile</Link>
                    </div>
                </div>
            </div>

            {/* this is right sidebar container */}
            <div className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] col-span-3 rounded-lg p-10'>
                <h1 className='text-2xl font-bold text-purple-500'>My Profile</h1>
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
                            <p className='text-xl font-semibold'>Mahmod Hasan</p>
                        </div>
                        <div>
                            <span className='text-sm font-semibold'>Email Address</span>
                            <p className='text-xl font-semibold'>mahmodhasan7788@gmail.com</p>
                        </div>
                        <div>
                            <span className='text-sm font-semibold'>Phone Number</span>
                            <p className='text-xl font-semibold'>+088-123514552</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProfile;
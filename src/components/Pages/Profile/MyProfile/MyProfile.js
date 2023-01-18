import React, { useContext, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { AuthContext } from '../../../../Context/UserContext';

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const [edit, setEdit] = useState(false);
    return (
        <div>
            <div className='flex justify-between gap-10'>
                <h1 className='text-2xl font-bold text-purple-500'>My Profile</h1>
                <FaEdit className='hover:text-blue-500 hover:cursor-pointer w-12'></FaEdit>
            </div>
            <div className='flex space-x-20'>
                {/* this is image container */}
                <div>
                    <img src="https://placeimg.com/80/80/people" alt="" className='rounded-full w-32 h-32 my-6' />
                    <button
                        onClick={() => setEdit(!edit)}
                        className='btn btn-xs md:btn-sm'>
                        {edit ? 'Later' : 'Edit Profile'}
                    </button>
                </div>
                {/* this is user information container */}
                <div>
                    {
                        edit ?
                            < form className='space-y-4 border p-5 w-full'>
                                <div>
                                    <input className="input input-sm w-full input-bordered" type="text" defaultValue={user?.displayName} />
                                </div>
                                <div>
                                    <input className="input input-sm w-full input-bordered" type="email" defaultValue={user?.email} />
                                </div>
                                <div>
                                    <input className="input input-sm w-full input-bordered" type="number" defaultValue={'0131489843'} />
                                </div>
                                <button className='btn btn-primary'>Save Changes</button>
                            </form>
                            :
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
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
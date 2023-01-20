import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/UserContext';
const LeftSideBar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] text-center rounded-lg p-5'>
            <img src={user?.photoURL} alt="" className='rounded-full w-20 h-20 mx-auto my-10' />
            <div className='font-bold space-y-4'>
                <div className='flex items-center gap-6'>
                    <img className='w-8' src="https://i.ibb.co/P1fJZ0z/profile-image.png" alt="" />
                    <Link to='/view-profile'>My Profile</Link>
                </div>
                <div className='flex items-center gap-6'>
                    <img className='w-8' src="https://cdn-icons-png.flaticon.com/128/9062/9062564.png" alt="" />
                    <Link to='/view-profile/address'>Address</Link>
                </div>
                <div className='flex items-center gap-6'>
                    <img className='w-8' src="https://cdn-icons-png.flaticon.com/128/5254/5254567.png" alt="" />
                    <Link to='/view-profile/education'>Education</Link>
                </div>
                <div className='flex items-center gap-6'>
                    <img className='w-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ93eSnGDLqSPEtbO1QnEjeqrSl17JWxHDGXg&usqp=CAU" alt="" />
                    <Link to='/view-profile/my-contribution'>My Contribution</Link>
                </div>
            </div>
        </div>
    );
};

export default LeftSideBar;
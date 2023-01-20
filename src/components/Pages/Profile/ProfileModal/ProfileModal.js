import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/UserContext';

const ProfileModal = () => {
    const { user } = useContext(AuthContext);
    return (

        <div>

            <input type="checkbox" id="profile-modal" className="modal-toggle" />

            <div className="modal">

                <div className="modal-box absolute top-16 right-6 w-72">

                    <label htmlFor="profile-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <div>   <img src="https://placeimg.com/80/80/people" alt="" className='rounded-full w-24 h-24 mx-auto' /></div>

                    <div className='text-center mt-4 space-y-4'>
                        <h2 className='text-xl f-bold text-indigo-500'>{user?.displayName}</h2>
                        <span>{user?.email}</span>
                        <Link to='/view-profile' className='btn btn-xs md:btn-sm'>View Profile</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileModal;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Context/UserContext';

const ProfileModal = ({ show, setShow }) => {
    const { user, logOut } = useContext(AuthContext);
    return (

        <div>

            <input type="checkbox" id="profile-modal" className="modal-toggle" />

            <div className="modal">

                <div className="modal-box absolute top-16 right-6 w-72">

                    <label htmlFor="profile-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    {
                        user?.photoURL ?
                            <img className='rounded-full w-24 h-24 mx-auto' src="https://i.ibb.co/dJnbzDL/profile-image.png" alt=""></img>
                            :
                            <img src={user?.photoURL} alt="" className='rounded-full w-24 h-24 mx-auto' />
                    }

                    <div className='text-center mt-4 space-y-4'>
                        <h2 className='text-xl f-bold text-indigo-500'>{user?.displayName}</h2>
                        <span>{user?.email}</span>
                        <Link to='/view-profile' className='btn btn-xs md:btn-sm'>View Profile</Link><br />
                        <button onClick={() => { setShow(null); logOut() }} className='btn btn-warning btn-sm'><img className='w-4 inline mr-2' src="https://cdn-icons-png.flaticon.com/128/3889/3889524.png" alt="" /> Logout</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileModal;
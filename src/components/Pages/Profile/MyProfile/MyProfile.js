import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';
import { AuthContext } from '../../../../Context/UserContext';

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    const [edit, setEdit] = useState(false);
    const { register, handleSubmit } = useForm();
    // get user data from database using useQuery
    const { data, isLoading, refetch } = useQuery({
        queryKey: ['user', user?.uid],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/user?uid=${user?.uid}`);
            const data = await res.json();
            return data;
        }
    })
    if (isLoading) {
        return 'Loading...'
    }
    // destructuring user data
    const { email, name, photoURL, phoneNumber } = data;

    // update profile form handler
    const updateProfile = (data) => {
        if (!(/(\+88)?-?01[0-9]\d{8}/g).test(data.phoneNumber)) {
            toast.error('please input valid number')
            return;
        }
        else {
            fetch(`http://localhost:5000/user?uid=${user?.uid}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        toast.success('Your Information Updated Successfully')
                        setEdit(false);
                        refetch();
                    }
                })
        }

    }

    return (
        <div>
            <div className='flex justify-between gap-10'>
                <h1 className='text-2xl font-bold text-purple-500'>My Profile</h1>
                <FaEdit className='hover:text-blue-500 hover:cursor-pointer w-12'></FaEdit>
            </div>
            <div className='flex space-x-20'>
                {/* this is image container */}
                <div>
                    <img src={photoURL} alt="" className='rounded-full w-32 h-32 my-6' />
                    <button
                        onClick={() => setEdit(!edit)}
                        className='btn btn-xs md:btn-sm'>
                        {edit ? 'Later' : 'Edit Profile'}
                    </button>
                </div>
                {/* this is user information container */}
                <div>
                    {
                        // conditional rendering
                        edit ?
                            // either this one
                            < form onSubmit={handleSubmit(updateProfile)} className='space-y-4 border p-5 w-full'>
                                <div>
                                    <label className='label'>Name</label>
                                    <input {...register('name')} className="input input-sm w-full input-bordered" type="text" defaultValue={name} />
                                </div>
                                <div>
                                    <label className='label'>Email</label>
                                    <input {...register('email')} className="input input-sm w-full input-bordered" type="email" defaultValue={email} />
                                </div>
                                <div>
                                    <label>Mobile Number</label>
                                    {
                                        phoneNumber ?
                                            <input {...register('phoneNumber')} className="input input-sm w-full input-bordered" type="number" defaultValue={phoneNumber} />
                                            :
                                            <input {...register('phoneNumber')} className="input input-sm w-full input-bordered" type="number" placeholder='Provide your number' />
                                    }
                                </div>
                                <input className='btn' type="submit" value="Save Changes" />
                            </form>

                            // OR this one
                            :
                            <div className='space-y-4'>
                                <div>
                                    <span className='text-sm font-semibold'>Full Name</span>
                                    <p className='text-xl font-semibold'>{name}</p>
                                </div>
                                <div>
                                    <span className='text-sm font-semibold'>Email Address</span>
                                    <p className='text-xl font-semibold'>{email}</p>
                                </div>
                                <div>
                                    <span className='text-sm font-semibold'>Phone Number</span>
                                    <p className='text-xl font-semibold'>{phoneNumber}</p>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProfile;
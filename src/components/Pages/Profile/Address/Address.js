import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaEdit } from 'react-icons/fa';
import { AuthContext } from '../../../../Context/UserContext';
// import usePutMethod from '../../../../hooks/usePutMethod';

const Address = () => {
    // const [addressInfo, setAddressInfo] = useState({});
    const [edit, setEdit] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const handleAddressForm = (data) => {
        // setAddressInfo(data);
    }
    // const receivedData = usePutMethod(`https://easy-doc-server.vercel.app/user?uid=${user?.uid}`, addressInfo)
    // console.log(receivedData)

    return (
        <div>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-bold text-purple-600'>Address</h1>
                <div>
                    {
                        edit ?
                            <button onClick={() => setEdit(!edit)} className="btn btn-outline btn-error">Not Now</button>
                            :
                            <button className="btn btn-outline btn-success flex items-center" onClick={() => setEdit(!edit)} ><FaEdit className="hover:text-blue-500 hover:cursor-pointer mr-2"></FaEdit> Edit
                            </button>
                    }
                </div>
            </div>
            <h3 className='mt-6 text-2xl font-bold'>Present Address</h3>
            <form onSubmit={handleSubmit(handleAddressForm)} className='bg-gray-200 p-5'>

                <div>
                    <label className='label label-text'>Country Name</label>
                    <input {...register('country', { required: 'country is required' })} type="text" placeholder="Bangladesh" className="input input-bordered w-full" />
                </div>
                {errors.country && <p className='text-red-500'>{errors.country?.message}</p>}
                <div>
                    <div>
                        <label className='label label-text'>District Name</label>
                        <input {...register('district', {
                            required: 'distric is required'
                        })} className="input input-bordered w-full" placeholder='Brahmanbaria'></input>
                    </div>
                    {errors.district && <p className='text-red-500'>{errors.distric?.message}</p>}
                </div>
                <div>
                    <label className='label label-text'>Street</label>
                    <input {...register('street', { required: true })} type="text" placeholder="comilla hai-way" className="input input-bordered w-full" />
                </div>
                {errors.street && <p className='text-red-500'>this field is required</p>}
                <input className='btn btn-wide mt-5' type="submit" value="Save" />
            </form>
        </div>
    );
};

export default Address;
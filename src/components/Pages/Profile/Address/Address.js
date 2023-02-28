import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';
import { AuthContext } from '../../../../Context/UserContext';
import useTitle from '../../../../Hook/useTitle';
// import useFetch from '../../../../hooks/useFetch';
// import useHttp from '../../../../hooks/useHttp';

const Address = () => {
    // const [addressInfo, setAddressInfo] = useState({});
    useTitle('Address');
    const [edit, setEdit] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useContext(AuthContext);
    const { data: addressInfo, isLoading, refetch } = useQuery({
        queryKey: ['user', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://easy-doc-server.vercel.app/user?email=${user?.email}`, {
                // checking valid user or not by token before send data
                headers: {
                    // set token into local-storage
                    authorization: `Bearer ${localStorage.getItem('jwt-token')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    const putAddressInfo = data => {
        fetch(`https://easy-doc-server.vercel.app/user?email=${user?.email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success("Your Information Updated Successfully");
                    setEdit(false);
                    refetch();
                }
            });
    }
    const { country, district, street } = addressInfo;
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
            <div className='bg-gray-200 p-5'>
                {
                    edit ?
                        <form onSubmit={handleSubmit(putAddressInfo)} className='bg-gray-200 p-5'>

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
                        :
                        <div className="overflow-x-auto">
                            <table className="table table-zebra w-full">
                                <tbody>
                                    <tr>
                                        <th>Country</th>
                                        <td>{country ? country : 'not define'}</td>
                                    </tr>
                                    <tr>
                                        <th>District</th>
                                        <td>{district ? district : 'not define'}</td>
                                    </tr>
                                    <tr>
                                        <th>Street</th>
                                        <td>{street ? street : 'not define'}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                }
            </div>

        </div>
    );
};

export default Address;
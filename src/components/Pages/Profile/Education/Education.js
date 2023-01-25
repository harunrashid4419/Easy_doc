import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';
import { AuthContext } from '../../../../Context/UserContext';
import useFetch from '../../../../hooks/useFetch';
import useHttp from '../../../../hooks/useHttp';

const Education = () => {
    const { user } = useContext(AuthContext);
    const [edit, setEdit] = useState(false);
    const [errorMesage, setErrorMesage] = useState('');
    const [educationInfo, setEducationInfo] = useState(null);
    const { register, handleSubmit } = useForm();
    // get user information by query user uid
    const { data: currentUser, isLoading } = useFetch(`https://easy-doc-server.vercel.app/user?uid=${user?.uid}`);


    const [error, sendPutRequest, loading] = useHttp();

    function putEducationInfo(formValue) {
        sendPutRequest(`https://easy-doc-server.vercel.app/user?uid=${user?.uid}`, 'PUT', formValue, receiveData);
    }
    function receiveData(data) {
        console.log(data)
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    const { education, institute, subject } = currentUser;


    return (
        <div>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-bold text-indigo-700 mb-5'>Education</h1>
                {
                    edit ?
                        <button onClick={() => setEdit(!edit)} className="btn btn-outline btn-error">Not Now</button>
                        :
                        <button className="btn btn-outline btn-success flex items-center" onClick={() => setEdit(!edit)} ><FaEdit className="hover:text-blue-500 hover:cursor-pointer mr-2"></FaEdit> Edit
                        </button>
                }
            </div>
            <div className='bg-gray-200 p-5'>
                {
                    edit ?
                        <form onSubmit={handleSubmit(putEducationInfo)} className='grid md:grid-cols-2 gap-5'>
                            <div>
                                <label className='label label-text'>Select your education level</label>
                                <select {...register('education')} className="select w-full">
                                    <option>JSC/JDC/8 Pass</option>
                                    <option>Secondary</option>
                                    <option>Higher Secondary</option>
                                    <option>Diploma</option>
                                    <option>Bechalor Honors</option>
                                    <option>Masters</option>
                                </select>
                            </div>
                            <div>
                                <label className='label label-text'>Exam/Degree Title</label>
                                <select {...register('subject')} className="select w-full" required>
                                    <option>Political Science</option>
                                    <option>Management</option>
                                    <option>Accounting</option>
                                </select>
                            </div>
                            <div>
                                <label className='label label-text'>Institute name</label>
                                <select {...register('institute')} className="select w-full" required>
                                    <option>Dhaka University</option>
                                    <option>Jahangirnagar University</option>
                                    <option>Chittagong University of Engineering and Technology</option>
                                    <option>Khulna University</option>
                                    <option>Rajshahi University</option>
                                </select>
                            </div>
                            <div>
                                <label className='label label-text'>Passing year</label>
                                <input {...register('passingYear')} className='input input-bordered w-full' type="date" required />
                            </div>
                            <div>
                                <label className='label label-text'>running year</label>
                                <select {...register('runningYear')} className="select w-full">
                                    <option>1st year</option>
                                    <option>2nd year</option>
                                    <option>3rd year</option>
                                    <option>4th year</option>
                                </select>
                            </div><br />
                            <input className='btn btn-wide' type="submit" value="Save" />
                        </form>
                        :
                        <div className="overflow-x-auto">
                            <table className="table table-zebra w-full">
                                <tbody>
                                    <tr>
                                        <th>Education</th>
                                        <td>{education}</td>
                                    </tr>
                                    <tr>
                                        <th>Subject</th>
                                        <td>{subject}</td>
                                    </tr>
                                    <tr>
                                        <th>Institute</th>
                                        <td>{institute}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                }
            </div>
        </div>

    );
};

export default Education;
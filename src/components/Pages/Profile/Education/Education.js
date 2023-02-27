import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FaEdit } from 'react-icons/fa';
import { AuthContext } from '../../../../Context/UserContext';
import useTitle from '../../../../Hook/useTitle';


const Education = () => {
    useTitle('Education');
    const { user } = useContext(AuthContext);
    const [edit, setEdit] = useState(false);
    const { register, handleSubmit } = useForm();

    // get user information by query user uid
    const { data: educationInfo, isLoading, refetch } = useQuery({
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
    const handleEducationForm = data => {
        fetch(`https://easy-doc-server.vercel.app/user?email=${user?.email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data)
                if (data.acknowledged) {
                    toast.success("Your Information Updated Successfully");
                    setEdit(false);
                    refetch();
                }
            });
    }

    const { education, institute, subject, passingYear, runningYear } = educationInfo;

    return (
        <div>
            <div className='flex justify-between'>
                <h1 className='text-4xl font-bold text-indigo-700 mb-5'>Education </h1>

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
                        <form onSubmit={handleSubmit(handleEducationForm)} className='grid md:grid-cols-2 gap-5'>
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
                                        <td>{education ? education : 'not define'}</td>
                                    </tr>
                                    <tr>
                                        <th>Subject</th>
                                        <td>{subject ? subject : 'not define'}</td>
                                    </tr>
                                    <tr>
                                        <th>Institute</th>
                                        <td>{institute ? institute : 'not define'}</td>
                                    </tr>
                                    <tr>
                                        <th>Passing Year</th>
                                        <td>{passingYear ? passingYear : 'not define'}</td>
                                    </tr>
                                    <tr>
                                        <th>Running Year</th>
                                        <td>{runningYear ? runningYear : 'not define'}</td>
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
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';
import useAdmin from '../../../Hook/useAdmin';

const DashboardRoutes = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    return (
        <div className='grid space-y-4'>
            {isAdmin && (
                <>
                    <Link className="p-2 hover:bg-gray-500 hover:text-white bg-slate-200" to="/dashboard/users">
                        All User
                    </Link>
                    <Link className="p-2 hover:bg-gray-500 hover:text-white bg-slate-200" to="/dashboard/paymentUsers">
                        All Payment User
                    </Link>
                </>
            )}
            <Link className="p-2 hover:bg-gray-500 hover:text-white bg-slate-200" to="/dashboard/addReview">
                Add Review
            </Link>
            <Link className="p-2 hover:bg-gray-500 hover:text-white bg-slate-200" to="/dashboard/addBlog">
                Add Blog
            </Link>
        </div>
    );
};

export default DashboardRoutes;
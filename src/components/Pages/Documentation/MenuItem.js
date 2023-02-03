import React from 'react';
import { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MenuItem = ({ menu }) => {
    const [open, setOpen] = useState(false);

    return (
        <ul>
            {
                menu.subMenu ?
                    <li className='text-xl'>
                        <Link to={`/documentation/${menu.id}`}
                            onClick={() => setOpen(!open)}
                            className="flex justify-between transition duration-700 ease-in-out cursor-pointer">

                            {menu?.menuTitle} <FaAngleRight className={`inline text-2xl text-gray-600 ${open ? 'rotate-90' : ''} transition delay-50`}></FaAngleRight>
                        </Link>
                        {
                            menu?.subMenu.map(sub => <Link
                                key={sub.id}
                                className={`ml-4 ${open ? 'block' : 'hidden'} hover:bg-gray-300 cursor-pointer p-1 rounded`} to={`/documentation/${sub.id}`} >
                                {sub.subMenuTitle}
                            </Link>
                            )
                        }
                    </li>
                    :
                    <li>
                        <Link to={`/documentation/${menu.id}`}>{menu.title}</Link>
                    </li>
            }
        </ul>
    )
};

export default MenuItem;
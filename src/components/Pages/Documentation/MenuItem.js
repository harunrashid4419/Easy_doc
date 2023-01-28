import React from 'react';
import { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MenuItem = ({ menu }) => {
    const [open, setOpen] = useState(false);

    if (menu?.subMenu) {
        return (
            <ul className='text-xl'>
                <li onClick={() => setOpen(!open)}
                    className=" transition duration-700 ease-in-out cursor-pointer">
                    <Link to={`/documentation/${menu.id}`}
                        className="flex justify-between">
                        {menu?.menuTitle} <FaAngleRight className={`inline text-2xl text-gray-600 ${open ? 'rotate-90' : ''} transition delay-50`}></FaAngleRight>
                    </Link>
                </li>
                {
                    menu?.subMenu.map(sub => <li
                        key={sub.id}
                        className={`ml-4 ${open ? 'block' : 'hidden'} hover:bg-gray-300 cursor-pointer p-1 rounded`}>
                        <Link to={`/documentation/${sub.id}`} >
                            {sub.subMenuTitle}
                        </Link>
                    </li>)
                }
            </ul>
        )
    }
    else {
        return (
            <li>{menu.title}</li>
        )
    }
};

export default MenuItem;
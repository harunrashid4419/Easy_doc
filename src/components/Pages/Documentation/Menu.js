import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import MenuItem from './MenuItem';

const Menu = () => {
    const [allMenu, setAllMenu] = useState([]);
    useEffect(() => {
        fetch('/docsFakeData.json')
            .then(res => res.json())
            .then(data => setAllMenu(data))
    }, [])

    return (
        <div className='bg-gray-100 pl-4 pr-2 h-screen border-r-4 border-gray-200'>
            <div className="divider text-gray-500">Menu</div>
            <div className='relative'>
                <input className="w-full border-2 mb-4 pl-16 p-2 rounded" type="text" placeholder='Quick Search' /><FaSearch className='absolute top-3 left-4 w-10 text-slate-400'></FaSearch>
            </div>
            {
                allMenu && allMenu.map(menu => <MenuItem
                    key={menu?.id}
                    menu={menu}
                ></MenuItem>)
            }
        </div>
    );
};

export default Menu;
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaSearch } from "react-icons/fa";
import MenuItem from "./MenuItem";
// import Menu from './Menu';

const MenuBar = () => {
    const { data: allMenu = [], isLoading } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await fetch('https://easy-doc-server.vercel.app/menu');
            const data = await res.json();
            return data
        }
    })
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div className='bg-gray-100 md:h-screen md:border-r-4 border-gray-200 overflow-y-scroll md:sticky top-0 p-4'>
            <div className="divider text-gray-500">Menu</div>
            <div className='relative'>
                <input className="w-full border-2 mb-4 pl-16 p-2 rounded" type="text" placeholder='Quick Search' /><FaSearch className='absolute top-3 left-4 w-10 text-slate-400'></FaSearch>
            </div>
            <div>
                {
                    allMenu && allMenu.map(menu => <MenuItem
                        key={menu?.id}
                        menu={menu}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuBar;

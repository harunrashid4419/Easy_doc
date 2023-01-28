import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const IdWiseDataLoad = () => {
    const { id } = useParams();
    // console.log(id);
    // const [allMenu, setAllMenu] = useState([]);
    // const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     setLoading(true)
    //     fetch('./docsFakeData.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllMenu(data)
    //             console.log(data)
    //             setLoading(false);
    //         })
    // }, [id])
    // if (loading) {
    //     return <h1>loading...</h1>
    // }
    // console.log(allMenu);
    // const menuData = allMenu.find(menu => menu.id === id)

    // console.log(menuData);
    // const { description } = menuData;
    return (
        <div className='border h-30'>
            <h1 className='text-4xl font-bold text-center'> this is dynamic Id :{id}</h1>
        </div>
    );
};

export default IdWiseDataLoad;
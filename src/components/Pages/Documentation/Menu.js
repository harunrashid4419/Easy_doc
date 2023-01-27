import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [docData, setDocData] = useState([]);
    useEffect(() => {
        fetch('./docsFakeData.json')
            .then(res => res.json())
            .then(data => setDocData(data))
    }, [])
    return (
        <div className='bg-gray-100 p-3 overflow-y-scroll'>
            <div className="divider text-gray-500">Menu</div>

            {
                docData.map((doc, idx) => <ul key={idx} className='text-lg text-gray-900 font-sans'>{doc?.title}
                    {doc?.questions.map(d => <li className='ml-4 before:content-[">"] text-base'> {d.title}</li>)}</ul>)
            }
        </div>
    );
};

export default Menu;
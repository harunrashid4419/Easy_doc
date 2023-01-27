import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Menu = () => {
    const { id } = useParams();
    console.log(id);
    const [docData, setDocData] = useState([]);
    useEffect(() => {
        fetch('./docsFakeData.json')
            .then(res => res.json())
            .then(data => setDocData(data))
    }, [])
    return (
        <div className='bg-gray-100 p-3 overflow-y-scroll'>
            <div className="divider text-gray-500">Menu</div>
            <ul>
                {
                    docData.map((doc, idx) => <li key={idx} className='text-lg text-gray-900 font-sans'>{doc?.title}
                        {doc?.questions.map(question => <li className="ml-4">{question?.question}</li>)}
                    </li>)
                }
            </ul>

        </div>
    );
};

export default Menu;
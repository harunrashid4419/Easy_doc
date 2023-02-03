import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Menu from './Menu';
import SubMenu from './SubMenu';

const IdWiseDataLoad = () => {
    const { id = '01' } = useParams();
    const { data, isLoading } = useQuery({
        queryKey: ["menu", id],
        queryFn: async () => {
            const res = await fetch(`https://easy-doc-server.vercel.app/menu/${id}`);
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <h1>LOading..</h1>
    }

    return (
        <div>
            {
                data?._id ?
                    <Menu menu={data}></Menu>
                    :
                    <SubMenu subMenu={data}></SubMenu>
            }
        </div>
    )

};

export default IdWiseDataLoad;
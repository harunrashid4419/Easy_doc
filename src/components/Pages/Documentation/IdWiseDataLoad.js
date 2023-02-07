
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { DOC_DATA, ERROR } from '../../../redux/actionTypes/actionTypes';
import Menu from './Menu';
import SubMenu from './SubMenu';

const IdWiseDataLoad = () => {
    const state = useSelector((state) => state);
    const { data, loading, error } = state;
    const { id = '01' } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        fetch(`https://easy-doc-server.vercel.app/menu/${id}`)
            .then(res => res.json())
            .then(data => dispatch({ type: DOC_DATA, result: data }))
            .catch(() => dispatch({ type: ERROR }))
    }, [id])
    if (error) {
        return <p className='text-red-500 text-xl text-center'>{error}</p>
    }
    return (
        <div>

            {loading ? 'Loading' :
                data?._id ?
                    <Menu menu={data}></Menu>
                    :
                    <SubMenu subMenu={data}></SubMenu>
            }

        </div>
    )

};

export default IdWiseDataLoad;
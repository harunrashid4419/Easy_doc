import React, { useReducer } from 'react';
import { HiOutlineThumbUp, HiOutlineThumbDown } from "react-icons/hi";

const initialState = '';
const reducer = (state, action) => {
    switch (action) {
        case 'yes':
            return 'yes';
        case 'no':
            return 'no';
        default:
            return state;
    }
}
const Menu = ({ menu }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { tips, what, why, types, examples } = menu;
    const allTip = tips?.list.split('   ');
    const allType = types?.type.split('   ');
    const codes = examples?.code?.split('   ');
    return (
        <div className='space-y-4 md:space-y-10'>
            <h1 className="text-3xl md:text-5xl font-bold">{what?.title}</h1>
            <p className="text-lg md:text-xl ">{what?.description}</p>
            <h2 className="text-2xl md:text-3xl font-semibold">{types?.heading}</h2>
            <p className='text-lg md:text-xl'>{types?.para1}</p>
            <div className='space-y-2'>
                {
                    allType && allType.map((type, idx) => <ul
                        key={idx}
                    >
                        {
                            type.includes('Error') ?
                                <li className='text-base md:text-xl text-blue-700 underline'>
                                    {type}
                                </li>
                                :
                                <li className="text-lg md:text-xl">
                                    {type}
                                </li>
                        }
                    </ul>)
                }
            </div>

            {/* why part start */}
            <h2 className="text-xl md:text-3xl font-semibold ">{why?.question}</h2>
            <p className="text-lg md:text-xl">{why?.answer}</p>
            <h2 className='text-xl md:text-3xl font-bold text-green-800'>{tips?.heading}</h2>
            <div className='space-y-4'>
                {
                    allTip && allTip.map((tip, idx) => <ul
                        key={idx}>
                        {
                            (/\d\./).test(tip) ?
                                <li className="text-xl md:text-2xl font-semibold">{tip}
                                </li>
                                :
                                <li className='text-lg md:text-xl'>
                                    {tip}
                                </li>
                        }
                    </ul>)
                }
            </div>
            <h2 className='text-2xl md:text-3xl font-semibold '>{examples?.heading}</h2>
            <h4 className='text-xl md:text-2xl font-semibold'>{examples?.subHeading}</h4>
            <p className='text-lg md:text-xl'>{examples?.para1}</p>
            {
                codes && <div className="mockup-code overflow-x-scroll">
                    {
                        codes && codes.map((code, idx) => <pre
                            key={idx} className="text-gray-300"
                        ><code>{code}</code></pre>)
                    }
                </div>
            }
            <div className='border border-gray-800  md:w-1/2 mx-auto p-2 flex justify-evenly hover:bg-black hover:text-white'>
                <span>Did this page helpful</span>
                <button
                    onClick={() => dispatch('yes')}
                    className='flex items-center gap-2'>
                    Yes
                    <HiOutlineThumbUp className={`text-xl ${state === 'yes' && 'text-blue-700'}`}>
                    </HiOutlineThumbUp>
                </button>
                <button
                    onClick={() => dispatch('no')}
                    className='flex items-center gap-2'>
                    No <HiOutlineThumbDown className={`text-xl ${state === 'no' && 'text-blue-700'}`}>
                    </HiOutlineThumbDown>
                </button>
            </div>
        </div>
    );
};
export default Menu;

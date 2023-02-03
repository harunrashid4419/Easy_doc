import React from 'react';

const Menu = ({ menu }) => {

    const { tips, what, why, types, examples } = menu;
    const allTip = tips?.list.split('   ');
    const allType = types?.type.split('   ');
    const codes = examples?.code?.split('   ');
    return (
        <div className='space-y-10'>
            <h1 className="text-5xl font-bold">{what?.title}</h1>
            <p className="text-xl">{what?.description}</p>
            <h2 className="text-3xl">{types?.heading}</h2>
            <p>{types?.para1}</p>
            <div className='space-y-2'>
                {
                    allType && allType.map((type, idx) => <ul
                        key={idx}
                    >
                        {
                            type.includes('Error') ?
                                <li className='text-xl text-blue-400 underline'>
                                    {type}
                                </li>
                                :
                                <li>
                                    {type}
                                </li>
                        }
                    </ul>)
                }
            </div>
            <h2 className="text-3xl font-semibold">{why?.question}</h2>
            <p className="text-xl">{why?.answer}</p>
            <h2 className='text-3xl font-bold'>{tips?.heading}</h2>
            <div className='space-y-4'>
                {
                    allTip && allTip.map((tip, idx) => <ul
                        key={idx}>
                        {
                            (/\d\./).test(tip) ?
                                <li className="text-2xl font-semibold">{tip}
                                </li>
                                :
                                <li>
                                    {tip}
                                </li>
                        }
                    </ul>)
                }
            </div>
            <h2 className='text-3xl font-semibold'>{examples?.heading}</h2>
            <h4 className='text-2xl font-semibold'>{examples?.subHeading}</h4>
            <p className='text-xl'>{examples?.para1}</p>
            {
                codes && <div className="mockup-code">
                    {
                        codes && codes.map((code, idx) => <pre
                            key={idx} className="text-gray-300"
                        ><code>{code}</code></pre>)
                    }
                </div>
            }
        </div>
    );
};
export default Menu;

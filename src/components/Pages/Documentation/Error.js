import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Error = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    console.log(data);
    const { title, titleSummury, subTitle, subTitleSummury, errorTypes, question, answer, exampleTitle, subExampleTitle, subExampleTitleSummury, code } = data;
    const summuries = titleSummury?.split('   ');
    const types = errorTypes?.split('   ');
    const answers = answer?.split('   ');
    const codes = code?.split('   ');

    useEffect(() => {
        setLoading(true);
        fetch(`https://easy-doc-server.vercel.app/error/${id}`)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
    }, [id])
    if (loading) {
        return <p>Loading...</p>
    }
    return (
        <div className='text-[1.2rem]'>
            <h1 className='text-3xl md:text-5xl font-bold mt-10 mb-4'>{title}</h1>
            <div className='space-y-4'>
                {summuries && summuries.map(summury => <p>{summury}</p>)}
            </div>
            <h3 className='text-2xl md:text-3xl font-bold mt-10 mb-4'>{subTitle}</h3>
            <p>{subTitleSummury}</p>
            <div className='space-y-4'>
                {
                    types && types.map((type, idx) => <ul
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
            <h3 className='text-xl md:text-2xl font-bold my-4'>{question}</h3>
            <div>
                {answers && answers.map(answer => <p>{answer}</p>)}
            </div>
            <h3 className='text-2xl md:text-3xl font-bold mt-10 mb-4'>{exampleTitle}</h3>
            <h4 className='text-xl md:text-2xl font-bold mt-6 mb-4'>{subExampleTitle}</h4>
            <p>{subExampleTitleSummury}</p>
            <div>
                {
                    codes && <div className="mockup-code overflow-x-scroll">
                        {
                            codes && codes.map((code, idx) => <pre
                                key={idx} className="text-gray-300"
                            ><code>{code}</code></pre>)
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Error;
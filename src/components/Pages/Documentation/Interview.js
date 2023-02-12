import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { ERROR, SUCCESS } from '../../../redux/actionTypes/actionTypes';

const Interview = () => {
    const { id = '01' } = useParams();
    const [loading, setLoading] = useState(false);
    const [interview, setInterview] = useState({});
    const { title, img, titleSummury, subTitle, subTitleSummury, howTitle, howTitleSummury1, howTitleSummury2, exampleTitle, exampleAnswers, answer, question, tipsTitle, allTips } = interview;
    const tips = allTips?.split('   ');
    const answers = answer?.split('   ');
    const summuries = subTitleSummury?.split('   ');
    const summuries1 = howTitleSummury1?.split('   ');
    const summuries2 = howTitleSummury2?.split('   ');
    // const dispatch = useDispatch();
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/doc-data/${id}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setInterview(data)
            })
        // .catch(() => dispatch({ type: ERROR }))
    }, [id])

    if (loading) {
        return <p>Loading...</p>
    }
    // console.log(data);
    return (
        <div className='text-[1.2rem]'>
            <h1 className='text-3xl my-4 md:text-5xl font-bold'>{title}</h1>
            <img src={img}></img>
            <p>{titleSummury}</p>
            <h2 className='text-2xl md:text-3xl mt-10 mb-2 font-bold'>{subTitle}</h2>
            <div className='space-y-4'>
                {
                    summuries && summuries.map((summury, idx) => <p
                        key={idx}
                    >{summury}</p>)}
            </div>
            <h3 className='text-2xl md:text-3xl font-bold mt-10 mb-2'>{question}</h3>
            <div className='space-y-4'>
                {
                    answers && answers.map((answer, idx) => <p key={idx}>{answer}</p>)
                }
            </div>
            <h3 className='text-2xl md:text-3xl my-10 mb-2 font-bold'>{howTitle}</h3>

            <div className='space-y-4'>
                {
                    summuries1 && summuries1.map((summury, idx) => <ul
                        key={idx}
                    >
                        {
                            (/\d\./).test(summury) ?
                                <li className="text-xl md:text-2xl font-bold">
                                    {summury}
                                </li>
                                :
                                <li className="text-lg md:text-xl">
                                    {summury}
                                </li>
                        }
                    </ul>)
                }
            </div>
            <div className='space-y-4'>
                {
                    summuries2 && summuries2.map((summury, idx) => <ul
                        key={idx}
                    >
                        {
                            (/\d\./).test(summury) ?
                                <li className="text-xl md:text-2xl font-bold">
                                    {summury}
                                </li>
                                :
                                <li className="text-lg md:text-xl">
                                    {summury}
                                </li>
                        }
                    </ul>)
                }
            </div>
            <h3 className='text-[2rem] font-bold my-6'>{tipsTitle}</h3>
            <div className=''>
                {
                    tips && tips.map((tip, idx) => <ul
                        key={idx}>
                        {
                            (/\d\./).test(tip) ?
                                <li className="text-xl md:text-2xl font-semibold mt-4">{tip}
                                </li>
                                :
                                <li className='text-lg md:text-xl'>
                                    {tip}
                                </li>
                        }
                    </ul>)
                }
            </div>
            <h3 className='text-xl md:text-2xl font-semibold mb-4'>{exampleTitle}</h3>
            <div className='space-y-4'>
                {
                    exampleAnswers && exampleAnswers.map((answer, idx) => <div
                        key={idx}
                        className="border-l-[10px] border-indigo-600 rounded-tl-lg rounded-bl-lg "
                    >
                        <h3 className='text-xl font-medium md:text-2xl text-blue-700 md:font-bold ml-2 md:ml-6 '>{answer?.heading}</h3>
                        <p className='ml-2 md:ml-6'>{answer?.answer}</p>
                    </div>)
                }
            </div>
        </div >
    );
};

export default Interview;
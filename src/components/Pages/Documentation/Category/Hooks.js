import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import Code from '../Code';
// import { useFetchDataQuery } from '../../../../features/api/apiSlice';

const Hooks = () => {
    const { id } = useParams();
    // const { data: hooks, isLoading } = useFetchDataQuery(`/hooks/${id}`)
    // if (isLoading) {
    //     return <p>Loading...</p>
    // }

    const { data: hooks = [] } = useQuery({
        queryKey: ['hooks', id],
        queryFn: async () => {
            const res = await fetch(`https://easy-doc-server.vercel.app/hooks/${id}`);
            const data = await res.json();
            return data
        }
    })
    const { title, firstHeading, firstYellow, oneHeading, two, second, secondCode, third, thirdCode, fourYellow, four, fiveSubTitle, fiveYellow, six, sixCode, seven, sevenSubTitle, eight, nineHeading, ten, tenCode, elevenHeading, eleven, twelve, twelveHeading, thirteen, thirteenSubTitle, fourteenCode, fifteenYellow, sixteenSubTitle, seventeenYellow, seventeenSubTitle, eighteen, nineteenYellow, nineteen
        , twentyTwoCode, twentyThree, twentyFourCode, twentyFiveCode } = hooks;
    console.log(hooks);
    const firstYellows = firstYellow?.split('   ');
    const secondCodes = secondCode?.split('   ');
    const twos = two?.split('   ');
    const seconds = second?.split('   ');
    const thirds = third?.split('   ');
    const thirdCodes = thirdCode?.split('   ');
    const fours = four?.split('   ');
    const fourYellows = fourYellow?.split('   ');
    const fiveYellows = fiveYellow?.split('   ');
    const sixs = six?.split('   ');
    const sixCodes = sixCode?.split('   ');
    const sevens = seven?.split('   ');
    const eights = eight?.split('   ');
    const tens = ten?.split('   ');
    const tenCodes = tenCode?.split('   ');
    const elevens = eleven?.split('   ');
    const twelves = twelve?.split('   ');
    const thirteens = thirteen?.split('   ');
    const fourteenCodes = fourteenCode?.split('   ');
    const fifteenYellows = fifteenYellow?.split('   ');
    const seventeenYellows = seventeenYellow?.split('   ');
    const eighteens = eighteen?.split('   ');
    const nineteens = nineteen?.split('   ');
    const nineteenYellows = nineteenYellow?.split('   ');
    const twentyTwoCodes = twentyTwoCode?.split('   ');
    const twentyThrees = twentyThree?.split('   ');
    const twentyFourCodes = twentyFourCode?.split('   ');
    const twentyFiveCodes = twentyFiveCode?.split('   ');

    return (
        <div className='space-y-4'>
            <h1 className='text-2xl md:text-3xl lg:text-5xl font-bold mb-6'>{title}</h1>
            {
                firstHeading && <h2 className='text-md md:text-xl font-medium mb-2'>{firstHeading}</h2>
            }
            {
                oneHeading && <h2 className='text-md md:text-xl font-medium mb-2'>{oneHeading}</h2>
            }

            {
                firstYellows && <div className="p-3 bg-yellow-200 first-line:font-bold">
                    {
                        firstYellows.map((yellow, i) => (
                            <Code yellow={yellow} key={i}></Code>
                        ))
                    }
                </div>

            }
            {
                secondCodes && <div className="mockup-code mb-3">
                    {secondCodes.map((code, i) => (
                        <Code code={code} key={i}></Code>
                    ))}
                </div>
            }
            {
                twos && twos.map((p, i) => <p key={i} className='mb-4'>{p}</p>)
            }
            {
                seconds && seconds.map((p, i) => <p key={i} className='mb-4'>{p}</p>)
            }
            {
                thirds && thirds.map((p, i) => <p key={i} className='mb-4'>{p}</p>)
            }
            {
                thirdCodes && <div className="mockup-code mb-3">
                    {thirdCodes.map((code, i) => (
                        <Code code={code} key={i}></Code>
                    ))}
                </div>
            }
            {
                fours && fours.map((p, i) => <p key={i} className='mb-4'>{p}</p>)
            }

            {
                fourYellows && <div className="p-3 bg-yellow-200 first-line:font-bold">
                    {
                        fourYellows.map((yellow, i) => (
                            <Code yellow={yellow} key={i}></Code>
                        ))
                    }
                </div>

            }
            {
                fiveYellows && <div className="p-3 bg-yellow-200 first-line:font-bold">
                    {
                        fiveYellows.map((yellow, i) => (
                            <Code yellow={yellow} key={i}></Code>
                        ))
                    }
                </div>

            }
            {
                fiveSubTitle && <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>{fiveSubTitle}</h2>
            }
            {
                sixs && sixs.map((p, i) => <p key={i} className='mb-4'>{p}</p>)
            }
            {
                sixCodes && <div className="mockup-code mb-3">
                    {sixCodes.map((code, i) => (
                        <Code code={code} key={i}></Code>
                    ))}
                </div>
            }
            {
                sevens && sevens.map((p, i) => <p key={i} className='mb-4'>{p}</p>)
            }
            {
                sevenSubTitle && <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>{sevenSubTitle}</h2>
            }
            {
                eights && eights.map((p, i) => <p key={i} className='mb-4'>{p}</p>)
            }
            {
                nineHeading && <h2 className='text-md md:text-xl font-medium mb-2'>{nineHeading}</h2>
            }
            {
                tens && tens.map((p, i) => <p key={i} className='mb-4'>{p}</p>)
            }
            {
                tenCodes && <div className="mockup-code mb-3">
                    {tenCodes.map((code, i) => (
                        <Code code={code} key={i}></Code>
                    ))}
                </div>
            }

            {
                elevens && elevens.map((p, i) => <p key={i} className='mb-4'>{p}</p>)
            }
            {
                elevenHeading && <h2 className='text-md md:text-xl font-medium mb-2'>{elevenHeading}</h2>
            }
            {
                twelves && twelves.map((p, i) => <p key={i} className='mb-4'>{p}</p>)
            }
            {
                twelveHeading && <h2 className='text-md md:text-xl font-medium mb-2'>{twelveHeading}</h2>
            }

            {
                thirteens && thirteens.map((p, i) => <p key={i} className='mb-4'>{p}</p>)
            }
            {
                thirteenSubTitle && <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>{thirteenSubTitle}</h2>
            }
            {
                fourteenCodes && <div className="mockup-code mb-3">
                    {fourteenCodes.map((code, i) => (
                        <Code code={code} key={i}></Code>
                    ))}
                </div>
            }

            {
                fifteenYellows && <div className="p-3 bg-yellow-200 first-line:font-bold">
                    {
                        fifteenYellows.map((yellow, i) => (
                            <Code yellow={yellow} key={i}></Code>
                        ))
                    }
                </div>

            }
            {
                sixteenSubTitle && <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>{sixteenSubTitle}</h2>
            }
            {
                seventeenYellows && <div className="p-3 bg-yellow-200 first-line:font-bold">
                    {
                        seventeenYellows.map((yellow, i) => (
                            <Code yellow={yellow} key={i}></Code>
                        ))
                    }
                </div>

            }
            {
                seventeenSubTitle && <h2 className='text-xl md:text-2xl lg:text-3xl font-bold'>{seventeenSubTitle}</h2>
            }
            {
                eighteens && eighteens.map((p, i) => <p key={i} className='mb-4'>{p}</p>)
            }
            {
                nineteens && nineteens.map((p, i) => <p key={i} className='mb-4'>{p}</p>)
            }
            {
                nineteenYellows && <div className="p-3 bg-yellow-200 first-line:font-bold">
                    {
                        nineteenYellows.map((yellow, i) => (
                            <Code yellow={yellow} key={i}></Code>
                        ))
                    }
                </div>

            }
            {
                twentyTwoCodes && <div className="mockup-code mb-3">
                    {twentyTwoCodes.map((code, i) => (
                        <Code code={code} key={i}></Code>
                    ))}
                </div>
            }
            {
                twentyThrees && twentyThrees.map((p, i) => <p key={i} className='mb-4'>{p}</p>)
            }
            {
                twentyFourCodes && <div className="mockup-code mb-3">
                    {twentyFourCodes.map((code, i) => (
                        <Code code={code} key={i}></Code>
                    ))}
                </div>
            }
            {
                twentyFiveCodes && <div className="mockup-code mb-3">
                    {twentyFiveCodes.map((code, i) => (
                        <Code code={code} key={i}></Code>
                    ))}
                </div>
            }
        </div>
    );
};

export default Hooks;
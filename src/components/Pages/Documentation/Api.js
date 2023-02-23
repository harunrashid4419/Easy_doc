import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const Api = () => {
    const {id}=useParams();
    const [loading,setLoading]=useState(false);
    const [api,setApi]=useState({});

    useEffect(()=>{
        setLoading(true);
        fetch(`http://localhost:5000/apireference/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setApi(data)
            setLoading(false)
        })
    },[id])
    console.log(api)
    const {
        title,
        titleSummary,
        domcode1,
        titleSummary1,
        titleSummary2,
        titleSummary3,
        domcode2,
        title1,
        title1des,
        title2,
        title2des,
        title3,
        title3des,
        title4,
        title4des,
        title5,
        title5des,
        title6,
        title6des,
        title7,
        title7des,
        domcode7,
        title8,
        title8des,
        upyellowtitle,
        yellowtitle,
        domcode3,
        upcode4,
        domcode4,
        upcode5,
        upcode6,
        domcode5,
        upyellowtitle1,
        yellowtitle1,
        yellowtitle2,
        domcode6,
          }=api;
          
    const code1=domcode1?.split("   ");
    const summarytitle2=titleSummary2?.split("   ");
    const titledes1=title1des?.split("   ");
    const titledes2=title2des?.split("   ");
    const titledes7=title7des?.split("   ");
    const titledes8=title8des?.split("   ");
    const codeup4=upcode4?.split("   ");
    const code4=domcode4?.split("   ");
    const codeup5=upcode5?.split("   ");
    const code5=domcode5?.split("   ");
    const titleyellow=yellowtitle.split("   ");
    const title1yellow=yellowtitle1?.split("   ");
    const title2yellow=yellowtitle2?.split("   ");
    if (loading) {
        return <p>Loading...</p>;
      }
    return (
        <div>
            <h1 className='text-3xl font-bold text-orange-300'>{title}</h1>
            <div className="mockup-code">
            {
                code1 && code1.map(code=>)
            }
          </div>
        </div>
    );
};

export default Api;
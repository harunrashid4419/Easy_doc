
import { Action } from "@remix-run/router";
import { useState } from "react";
import { json } from "react-router-dom";


const useHttp = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    function sendHtttpRequest(url, method, body) {
        setLoading(true);
        fetch(url, {
            method: method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((res) => res.json())
            .then((result) => {
                setData(result);
                setLoading(false);
            })

    }
    return [data, sendHtttpRequest, loading]
    // let [errorMessage, setErrorMessage] = useState(null);
    // function sendHtttpRequest(url, method, body, action) {
    //     fetch(url, {
    //         method: method,
    //         body: JSON.stringify(body)
    //     })
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error('something wen wrong. Please try again')
    //             }
    //             let data = response.json();
    //             action(data)
    //         })
    //         .catch((error) => {
    //             setErrorMessage(error.message);
    //         })
    // }
    // return [errorMessage, sendHtttpRequest]
};

export default useHttp;
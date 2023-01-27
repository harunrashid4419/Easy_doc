
import { useState } from "react";


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

};

export default useHttp;
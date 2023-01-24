
import { useState } from "react";


const useHttp = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    function sendHtttpRequest(url, method, body, action) {
        setLoading(true);
        fetch(url, {
            method: method,
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('something wrong please try again')
                }
                const data = res.json();
                action(data);
            })
            .then((data) => {
                console.log(data)
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message)
                setLoading(false);
            })
    }
    return [error, sendHtttpRequest, loading]

};

export default useHttp;
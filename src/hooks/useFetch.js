import axios from "axios";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { ERROR, SUCCESS } from "../redux/actionTypes/actionTypes";


const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    // const state = useSelector((state) => state);
    // const { loading, data, error } = state;
    // const dispatch = useDispatch();
    useEffect(() => {
        setLoading(true);
        axios.get(url)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoading(false);
            })
            .catch(err => {
                setError(err)
                setLoading(false);
            })

    }, [url])
    return { data, loading, error }

}

export default useFetch;

// How to fetch data with axios

import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ERROR, SUCCESS } from "../redux/actionTypes/actionTypes";


const useFetch = (url) => {
    const state = useSelector((state) => state);
    const { loading, data, error } = state;
    const dispatch = useDispatch();
    useEffect(() => {
        axios.get(url)
            .then(res => {
                dispatch({ type: SUCCESS, result: res.data })
            })
            .catch(err => dispatch({ type: ERROR }))

    }, [url, dispatch])
    return { data, loading, error }

}

export default useFetch;

// How to fetch data with axios

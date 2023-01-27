
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Context/UserContext";


const useFetch = (url) => {
    const { user } = useContext(AuthContext);
    const { data, isLoading, refetch } = useQuery({
        queryKey: [user?.uid],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    })
    return { data, isLoading, refetch }

}

export default useFetch;

// How to fetch data with axios
// useEffect(() => {
//     setLoading(true);
//     axios.get(url)
//         .then(res => {
//             setData(res?.data);
//         })
//         .catch(err => setError(err))
//         .finally(() => {
//             setLoading(false);
//         })

// }, [url])
// return { data, loading, error }
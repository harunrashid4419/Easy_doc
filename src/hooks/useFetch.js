
import { useQuery } from "@tanstack/react-query";


const useFetch = (url) => {
    const { data, isLoading } = useQuery({
        queryKey: [url],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data
        }
    })
    return { data, isLoading }

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
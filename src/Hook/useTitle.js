import { useEffect } from "react";

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - Easy Doc`;
    }, [title])
}
export default useTitle;
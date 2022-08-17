import { useCallback, useEffect, useRef, useState } from "react"

const useFetch = ({ options, url }) => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    
    const fetchData = useCallback(({ isMounted }) => {
        if(isMounted)
            setLoading(true);
        
        fetch(url)
            .then(res => res.json())
            .then(countries => {
                if(isMounted) {
                    setLoading(false);
                    setData(countries);
                }
            })
            .catch(error => {
                if(isMounted) {
                    setLoading(false);
                    console.error(error);
                }
            })
    }, []);

    useEffect(() => {
        const properties = { isMounted: true };

        fetchData(properties);

        return () => {
            properties.isMounted = false;
        };
    }, [ fetchData ])

    return { data, loading };
};

export { useFetch };
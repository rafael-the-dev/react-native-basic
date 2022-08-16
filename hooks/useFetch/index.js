import { useCallback, useEffect, useState } from "react"

const useFetch = ({ options, url }) => {
    const [ data, setData ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const fetchData = useCallback(() => {
        setLoading(true);

        fetch(url)
            .then(res => res.json())
            .then(countries => {
                setLoading(false);
                setData(countries);
            })
            .catch(error => {
                setLoading(false);
                console.error(error);
            })
    }, []);

    useEffect(() => {
        fetchData();
    }, [ fetchData ])

    return { data, loading };
};

export { useFetch };
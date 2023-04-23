import React, { useState, useEffect } from 'react';

function withData(WrappedComponent, endpoint) {
    const url = `https://webproject-api-production.up.railway.app/api/${endpoint}`
    // const url = `https://webproject-api-production.up.railway.app/api/tools`

    return function(props) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); //improve user experience
    const [error, setError] = useState(null); //manage error

    // fetch data in the Hook with useEffect
    useEffect(() => {
        async function fetchData() {
        try {
            const response = await fetch(url, {
                method: "GET" // GET ER DEFAULT SÅ METODE ER IKKE NØDVENDIG, MEN GREI VANE I GUESS
            });
            // SENDER ERROR HVIS DET SKJER NOE
            if (!response.ok) {
                throw new Error(
                    `This is an HTTP error: The status is ${response.status}`
                )
            }
            // RESULTATET AV FETCHEN
            const result = await response.json();
            
            // SETT STATE SÅ DU KAN BRUKE DET SENERE I KODEN
            setData(result);
            setError(null);
        } catch (error) {
            setError(error.message);
            setData([])
        } finally {
            setLoading(false)
        }
        }
        fetchData();
    }, []);

    return  (
        <WrappedComponent {...props} data={data} loading={loading} error={error} />
    )
}
}

export default withData;
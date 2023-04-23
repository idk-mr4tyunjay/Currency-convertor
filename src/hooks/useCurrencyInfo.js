import { useEffect, useState } from "react";

// Creating a custom hook to handle API requests for currency information
function useCurrencyInfo(currency) {
    // Using useState because if stored in a variable, the value will never update
    const [data, setData] = useState({})

    // useEffect hook runs side effects after the component renders
    useEffect(() => {
        // Fetch data from the currency API using the provided currency code
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))

        // Console log the data (will log the previous state due to closure)
        console.log(data);
    }, [currency]) // Run the effect only when the currency code changes

    // Console log the data (will log the previous state due to closure)
    console.log(data);

    // Return the data fetched from the API
    return data
}

export default useCurrencyInfo

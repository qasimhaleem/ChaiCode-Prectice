import { useState, useEffect } from "react";

function useCurrency(curruncy) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${curruncy}.json`)
            .then((res) => res.json())
            .then((res) => {
                if (res && res[curruncy]) {
                    setData(res[curruncy])
                }
            })
    }, [curruncy])
    return data;
}
export default useCurrency;
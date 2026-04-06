import { useState, useEffect } from "react";

function useName() {
    const [name, setName] = useState('');
    let n = 10
    let profile = 'M | Qasim'
    useEffect(() => {
        if (n === 10) {
            setName(profile)
        }

    }, [])

    return name
}
export default useName;
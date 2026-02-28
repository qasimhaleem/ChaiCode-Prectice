import React from 'react'
import { useState, useEffect, useCallback, useRef } from 'react'

const PasswrodGenerator = () => {
    // state 
    const [length, setLength] = useState(8)
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("")
    // generating password with index
    const passGeneratore = useCallback(() => {
        let pass = ""
        let str = "asdfghjlzxcvbnmqwertyuiop";
        if (numAllowed) {
            str += "1234567890"
        }
        if (charAllowed) {
            str += "[]{}\|!@#$%^&*()_+="
        }
        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)
        }
        setPassword(pass)
    }, [length, numAllowed, charAllowed, setPassword])

    useEffect(() => {
        passGeneratore();
    }, [length, numAllowed, charAllowed, passGeneratore])
    return (
        <>
            <div className='h-screen w-full bg-gray-950'>
                <div className='flex flex-col justify-center items-center px-10 py-15 bg-gray-700 mx-20 rounded-3xl'>
                    <h1 className='text-white text-4xl'>Password Generator</h1>
                    <div className='pt-10'>
                        <input
                            type="text"
                            className='border bg-white text-black rounded-l-lg p-2 gap-4'
                            value={password}
                            readOnly

                        />
                        <button className='bg-blue-600 p-2 rounded-r-lg text-lg top-1 text-white font-semibold'>Copy</button>
                    </div>
                    <div className='pt-5 text-white gap-x-2'>
                        <input
                            type="range"
                            value={length}
                            min={4}
                            max={100}
                            onChange={(e) => setLength(e.target.value)} />

                        <label htmlFor="">Lenth(2)</label>
                        <input type="checkbox"
                            onClick={(prev) => !prev}
                            defaultChecked={numAllowed} />
                        <label htmlFor="">Number</label>
                        <input type="checkbox"
                            onChange={() => setNumAllowed((prev) => !prev)}
                            Checked={charAllowed} />
                        <label htmlFor="">character</label>
                    </div>
                </div>



            </div>
        </>
    )
}
export default PasswrodGenerator
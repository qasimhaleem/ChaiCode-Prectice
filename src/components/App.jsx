import React from 'react'
import { useState } from 'react'
const Project = () => {
    const [color, setColor] = useState("Olive");


    return (
        <div className='h-screen w-full duration-200' style={{ backgroundColor: color }}>
            <div className=' fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2'>
                <div className='flex flex-wrap justify-center
                gap-3 shadow-3xl px-3 py-2 rounded-3xl bg-white'>
                    <button
                        onClick={() => {
                            setColor("red")
                        }}
                        className=' text-white outline-none shadow-3xl px-4 py-2 rounded-3xl'
                        style={{ backgroundColor: 'red' }}
                    >Red</button>
                    <button
                        onClick={() => {
                            setColor("green")
                        }}
                        className=' text-white outline-none shadow-3xl px-4 py-2 rounded-3xl'
                        style={{ backgroundColor: 'green' }}
                    >Green</button>
                    <button
                        onClick={() => {
                            setColor("blue")
                        }}
                        className=' text-white outline-none shadow-3xl px-4 py-2 rounded-3xl'
                        style={{ backgroundColor: 'blue' }}
                    >Blue</button>
                    <button
                        onClick={() => {
                            setColor("pink")
                        }}
                        className=' text-white outline-none shadow-3xl px-4 py-2 rounded-3xl'
                        style={{ backgroundColor: 'pink' }}
                    >Pink</button>
                    <button
                        onClick={() => {
                            setColor("purple")
                        }}
                        className=' text-white outline-none shadow-3xl px-4 py-2 rounded-3xl'
                        style={{ backgroundColor: 'purple' }}
                    >Purple</button>
                    <button
                        onClick={() => {
                            setColor("black")
                        }}
                        className=' text-white outline-none shadow-3xl px-4 py-2 rounded-3xl'
                        style={{ backgroundColor: 'black' }}
                    >Black</button>
                    <button
                        onClick={() => {
                            setColor("aqua")
                        }}
                        className=' text-white outline-none shadow-3xl px-4 py-2 rounded-3xl'
                        style={{ backgroundColor: 'aqua' }}
                    >Aqua</button>


                </div>
            </div>
        </div>
    )
}

export default Project
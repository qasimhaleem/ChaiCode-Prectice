import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data =  useLoaderData();
   /*  const [data, setData] = useState({})
    useEffect(() => {
        fetch('https://api.github.com/users/qasimhaleem')
        .then((response) => response.json())
        .then(data =>{
            setData(data);
        })
    }, [])
     */
  return (
    <>
    <div className='bg-gray-700 m-10 p-5 shadow-gray-400 text-white flex items-center justify-center gap-10 rounded-2xl'>
        <h1>GIthub Followers: {data.following}</h1>
        <img src={data.avatar_url} alt="git Pic" width={200} />
        <h1>Name: {data.name}</h1>
    </div>
        
    </>
  )
}
export default Github

export const gitHubInfo = async () => {
    const response = await fetch('https://api.github.com/users/qasimhaleem')
    
    return response.json();
}
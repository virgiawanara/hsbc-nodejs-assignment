import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/virgiawanara/hsbc-reactjs-assignment/posts')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

  return (
    <div className='container'>
        <h2 className='flex mb-2 text-3xl text-gray-900'>CRUD with Express JS</h2>
        <Link to='/Create' className='flex max-w-28 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Create +</Link>
        <table className='table w-full text-sm text-left text-gray-500'>
            <thead>
                <tr className='text-xs text-gray-700 uppercase bg-gray-200'>
                    <th scope='col' className='px-6 py-3'>ID</th>
                    <th scope='col' className='px-6 py-3'>Name</th>
                    <th scope='col' className='px-6 py-3'>Country</th>
                    <th scope='col' className='px-6 py-3'>Age</th>
                    <th scope='col' className='px-6 py-3'>Action</th>
                </tr>
            </thead>
            <tbody>
                {data.map((d, i)=> (
                    <tr key={i} className='capitalize bg-white border-b hover:bg-gray-50'>
                        <td scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>{d.id}</td>
                        <td className='px-6 py-4'>{d.name}</td>
                        <td className='px-6 py-4'>{d.country}</td>
                        <td className='px-6 py-4'>{d.age}</td>
                        <td className='inline-flex'>
                            <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>UPDATE</button>
                            <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r'>EDIT</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table> 
    </div>
  )
}

export default Home

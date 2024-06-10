import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get("http://localhost:5000/users");
        setUser(response.data);
    };

    const deleteUser = async (id) => {
        try {
          await axios.delete(`http://localhost:5000/users/${id}`);
          getUsers();
        } catch (error) {
          console.log(error);
        }
      };

  return (
    <div className='container'>
        <h2 className='flex mb-2 text-3xl text-gray-900'>CRUD with Express JS</h2>
        <Link to='/Create' className='flex max-w-28 mb-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Create User</Link>
        <table className='table w-full text-sm text-left text-gray-500'>
            <thead>
                <tr className='text-xs text-gray-700 uppercase bg-gray-200'>
                    <th scope='col' className='px-6 py-3'>No</th>
                    <th scope='col' className='px-6 py-3'>Name</th>
                    <th scope='col' className='px-6 py-3'>Email</th>
                    <th scope='col' className='px-6 py-3'>Gender</th>
                    <th scope='col' className='px-6 py-3'>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr key={user.id} className='bg-white border-b hover:bg-gray-50'>
                        <td scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>{index + 1}</td>
                        <td className='capitalize px-6 py-4'>{user.name}</td>
                        <td className='px-6 py-4'>{user.email}</td>
                        <td className='capitalize px-6 py-4'>{user.gender}</td>
                        <td className='inline-flex'>
                            <Link to={`/Edit/${user.id}`} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l'>EDIT</Link>
                            <button onClick={()=> deleteUser(user.id)} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r'>DELETE</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table> 
    </div>
  )
}

export default Home

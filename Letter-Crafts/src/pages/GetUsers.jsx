import React from 'react'
import API from '../API'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function GetUsers() {
    const navigate = useNavigate()
    const [users, setusers] = useState([])
    const handleDeletion=async(id)=>{
        await API.delete(`/auth/delete-user/${id}`)
        fetchUser()
        alert("User deleted successfully")
    }
    const fetchUser = async () => {
        try {
            const user = await API.get("auth/get-user")

            setusers(user.data)

        } catch (error) {
            console.error("Error fetching users:", error);
        }



    }
    useEffect(() => {
        fetchUser();
    }, [])
    return (
        <div className='flex items-center justify-center '> 
            {users && (
            <table className='border shadow-lg rounded-xl p-6 w-full flex flex-col justify-center items-center gap-4'>
                <thead className='flex flex-col gap-4'>
                    <tr className='border-2 border-black flex justify-center text-center '>
                        <th className='p-2 font-semibold text-lg text-left '>Name</th>
                        <th className='p-2 font-semibold text-lg text-left'>Email</th>
                        <th className='p-2 font-semibold text-lg text-left'>Password</th>
                    </tr>
                </thead>
                <tbody className='flex flex-col gap-4 p-2 text-left border-2 w-full'>
{users.length>0?(
users.map((user) => (
                    <tr className='flex justify-center text-center ' key={user._id}>
                        <td className='p-2 font-semibold text-lg '>{user.name}</td>
                        <td className='p-2 font-semibold text-lg '>{user.email}</td>
                        <td className='p-2 font-semibold text-lg '>{user.password}</td>
                        <td className='p-2 font-semibold text-lg border-2 border-black rounded-lg ml-5 '><button onClick={() => navigate(`/update/${user._id}`)}>Update</button></td>
                        <td className='p-2 font-semibold text-lg border-2 border-black rounded-lg ml-5 '><button onClick={() => handleDeletion(user._id)}>Delete</button></td>
                        
                    </tr>
)) ):(<tr><td>No users</td></tr>)}
                </tbody>
            </table>
            )}
        </div>
    )
}

export default GetUsers
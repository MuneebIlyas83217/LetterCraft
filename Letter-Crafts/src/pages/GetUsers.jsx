import React from 'react'
import API from '../API'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


function GetUsers() {
    const navigate = useNavigate()
    const [showusers, setShowusers] = useState(false)
    const [users, setusers] = useState([])

    const handleView = async () => {
        if (!showusers) {
            fetchUser()
        }
        setShowusers(!showusers)
    }

    const handleDeletion = async (id) => {
        try {
            await API.delete(`/auth/delete-user/${id}`)
            fetchUser()
            alert("User deleted successfully")
        } catch (error) {
            console.error("Error deleting user:", error)
        }
    }

    const fetchUser = async () => {
        try {
            const user = await API.get("auth/get-user")
            setusers(user.data)
        } catch (error) {
            console.error("Error fetching users:", error)
        }
    }

    useEffect(() => {
    }, [])

    return (
        <div className='flex flex-col items-center justify-center p-6 w-full min-h-[70vh] bg-gray-50/50'>
            <div className="mb-6 flex gap-4">
                <button
                    className='px-6 py-2.5 border border-transparent rounded-xl bg-[#0189CF] hover:bg-[#0073ae] text-white font-medium shadow-md transition-all duration-200 cursor-pointer active:scale-95'
                    onClick={handleView}
                >
                    {showusers ? "Hide Users" : "Show Users"}
                </button>
            </div>

            {showusers && (
                <div className='w-full max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg'>
                    <div className='overflow-x-auto'>
                        <table className='w-full text-left border-collapse'>
                            <thead>
                                <tr className='bg-[#0189CF]/10 border-b border-gray-200 text-[#0189CF]'>
                                    <th className='py-4 px-6 text-sm font-semibold uppercase tracking-wider'>Name</th>
                                    <th className='py-4 px-6 text-sm font-semibold uppercase tracking-wider'>Email</th>
                                    <th className='py-4 px-6 text-sm font-semibold uppercase tracking-wider'>Message</th>
                                    <th className='py-4 px-6 text-sm font-semibold uppercase tracking-wider text-center'>Actions</th>
                                </tr>
                            </thead>
                            <tbody className='divide-y divide-gray-100'>
                                {users && users.length > 0 ? (
                                    users.map((user) => (
                                        <tr key={user._id} className='hover:bg-sky-50/40 transition-colors duration-150'>
                                            <td className='py-4 px-6 text-base font-medium text-gray-800 whitespace-nowrap'>{user.name}</td>
                                            <td className='py-4 px-6 text-base text-gray-600 whitespace-nowrap'>{user.email}</td>
                                            <td className='py-4 px-6 text-base text-gray-600 max-w-xs break-words'>{user.message || "-"}</td>
                                            <td className='py-4 px-6 text-center whitespace-nowrap'>
                                                <div className='flex items-center justify-center gap-3'>
                                                    <button
                                                        className='px-3.5 py-1.5 text-sm font-medium text-[#0189CF] border border-[#0189CF] rounded-lg hover:bg-[#0189CF] hover:text-white transition-all duration-150 cursor-pointer active:scale-95'
                                                        onClick={() => navigate(`/update/${user._id}`)}
                                                    >
                                                        Update
                                                    </button>
                                                    <button
                                                        className='px-3.5 py-1.5 text-sm font-medium text-red-600 border border-red-300 rounded-lg hover:bg-red-600 hover:text-white transition-all duration-150 cursor-pointer active:scale-95'
                                                        onClick={() => handleDeletion(user._id)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className='py-10 text-center text-gray-400 font-medium'>
                                            No users found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GetUsers
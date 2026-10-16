import React from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../API'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Update() {
    const navigate = useNavigate()

    const { id } = useParams();

    const [form, setform] = useState({
        name: "",
        email: "",
        message: ""
    })



    const fetchData = async () => {
        const res = await API.get(`/auth/getuser/${id}`)
        setform(res.data)
    }
    useEffect(() => {
        fetchData()
    }, [id])
    const handlechange = (e) => {
        const { name, value } = e.target
        setform({

            ...form,
            [name]: value
        })
    }
    const handlesubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await API.put(`/auth/update-user/${id}`, form)

            console.log("Updated:", res.data)
            alert("User updated successfully")

            navigate("/")
        } catch (error) {
            console.error("Registration error:", error)
            alert("Failed to update")
        }
    }

    return (
        <div className='flex w-full h-screen items-center justify-center' >
            <form onSubmit={handlesubmit} className='flex gap-2 flex-col border rounded-xl p-6 shadow-lg text-lg w-[360px]' >
                <h1 className='text-center text-2xl font-bold font-DMSans'>Update Data</h1>

                <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handlechange}
                    className='p-2 border rounded-xl'
                    type="text"
                    placeholder='Your Name'
                    required
                />

                <input
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handlechange}
                    className='p-2 border rounded-xl'
                    type="email"
                    placeholder='example@gmail.com'
                    required
                />
                <input
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handlechange}
                    className='p-2 border rounded-xl'
                    type="text"
                    placeholder='Message'
                    required
                />
                <button type='submit' className='p-2 border rounded-xl bg-[#0189CF] text-white cursor-pointer'> Update</button>

            </form>

        </div>
    )
}

export default Update
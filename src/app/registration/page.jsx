'use client'

import axios from 'axios';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import React, { useState } from 'react';

const RegistartionPage = () => {
    const router = useRouter()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        // Perform login logic here
        try {
            const  {data,status}  = await axios.post('http://localhost:3000/api/signin', {
                name, email, password, address
            })
            console.log(data)
            if(status === 200) {
                router.push("/login")
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="bg-gray-200 flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded shadow-lg">
                <h2 className="text-2xl mb-4">Registration </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-gray-700">Address</label>
                        <textarea
                            id="address"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        ></textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default RegistartionPage;

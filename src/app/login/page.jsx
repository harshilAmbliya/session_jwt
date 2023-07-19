'use client'

import React, { useState } from 'react'
import { signIn } from 'next-auth/react';
// import { use } from 'next/dist/server/api-utils';
// import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';
const LOGIN = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const data = await signIn('credentials', {
                redirect: false,
                email, password
            })
            // redirect("/")
            router.push('/')
            console.log(data)
        } catch (error) {
            console.log(error)
        }


    };

    return (
        <form onSubmit={handleSubmit} style={{ display: "flex" }}>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={(e) => setEmail(e.target.value)} required style={{ border: "2px solid black" }} />
            <label htmlFor="Password">Password</label>
            <input type="password" id='Password' onChange={(e) => setPassword(e.target.value)} style={{ border: "2px solid black" }} required />
            <button type="submit" style={{ backgroundColor: "black", color: "white", padding: "5px" }}>Submit</button>
        </form>
    )
}

export default LOGIN
'use client'

import { useSession } from 'next-auth/react'
import React from 'react'
import { signIn, signOut } from 'next-auth/react'
// import { getServerSession } from 'next-auth'
const Usersession = () => {

    const { data: session } = useSession()
    console.log(session)
    return (
        <>
            <div>getclient session</div>
            <pre>{JSON.stringify(session)}</pre>
            <button onClick={()=>signIn("credentials")} style={{ padding: "10px" }}>login</button>
            <button onClick={() => signOut()} style={{ padding: "10px" }}>logout</button>
        </>
    )
}

export default Usersession
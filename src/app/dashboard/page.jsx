'use client'

import axios from 'axios'
// import { getServerSession } from 'next-auth'
import React, { useState,useEffect } from 'react'

const Dashboard = () => {
    const [data, setData] = useState()
   
      useEffect(() => {
        axios.get('http://localhost:3000/api/session').then(
            (res) => setData(res.data)
        )
    
      }, [])
      
    
   
    console.log(data)
    return (
        <div>
            <h1>dashboard</h1>

          {
            data && data.authenticated? (
                <div>
                    <h1>Welcome {data.session.user.name}</h1>
                </div>
            ) : (
                <div>
                    <h1>Welcome Guest</h1>
                </div>
            )
          }

        </div>

    )
}

export default Dashboard
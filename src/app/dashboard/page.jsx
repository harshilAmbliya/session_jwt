'use client'

import axios from 'axios'
import { getServerSession } from 'next-auth'
import React, { useState } from 'react'

const Dashboard = () => {
    const [data, setData] = useState()
   
        axios.get('http://localhost:3000/api/session').then(
            (res) => setData(res.data)
        )
    
   
    console.log(data)
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard
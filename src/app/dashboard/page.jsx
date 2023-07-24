"use client";

import axios from "axios";
// import { getServerSession } from 'next-auth'
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/session")
      .then((res) => setData(res.data));
  }, []);

  console.log(data);
  return (
    <div className="text-center">
      {data && data.authenticated ? (
        <div>
          <h1 className="text-3xl text-center py-8">
            Welcome {data.session.user.name}
          </h1>

          <p>{JSON.stringify(data.session.user)}</p>
        </div>
      ) : (
        <div className="text-3xl text-center py-8">
          <h1>Welcome Guest</h1>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

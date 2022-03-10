import React, { useState } from "react";
const axios = require('axios');

const Dashboard = () => {
  const [users, setAllUser] = useState()
  axios.get('/get')
  .then(function (response) {
    setAllUser(response.data)
    return response
  })

  return (
    <div>
      <h2>Dashboard</h2>

      <table>
        <tr>
          <th>Id</th>
          <th>UserName</th>
          <th>Password</th>
        </tr>
        {users?.map(item => <tr>
          <td>{item.id}</td>
          <td>{item.userName}</td>
          <td>{item.password}</td>
        </tr>)}
      </table>
    </div>
  );
};

export default Dashboard;





import React, { useState, useEffect } from "react";
import Button from "../Shared/Button/index";
const axios = require("axios");

const Dashboard = () => {
  const [users, setAllUser] = useState();

  useEffect(() => {
    axios.get("/get").then(function (response) {
      setAllUser(response.data);
      return response;
    });
  }, []);

  const deleteUserHandler = (id) => {
    console.log(id);
  };

  return (
    <div>
      <h2 className="heading">Dashboard</h2>

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>UserName</th>
            <th>Password</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userName}</td>
              <td>{item.password}</td>
              <td><span className="flex_container">
                <Button
                  className={"button"}
                  onClick={() => deleteUserHandler}
                >
                  Delete
                </Button>
                <Button className={"button"}>Edit</Button>
              </span></td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Dashboard;

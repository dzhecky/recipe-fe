import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL;

export default function Register(){

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [username, setUsername] = useState()
    const navigate = useNavigate();

    const Regist = (e) =>{
      e.preventDefault()
    axios
      .post(
        baseUrl + '/user/register',
        {
          email,
          password,
          username,
        },
        { headers: { "content-type": "application/x-www-form-urlencoded" } }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("name", res.data.data.username);
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("uuid", res.data.data.uuid);
        setData(res.data.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("register succes");
    }


    return(
      <>
      <div className="container-fluid d-flex justify-content-center mt-5">
        <form onClick={Regist} className="d-grid w-25">
          <div className="text-center mb-5">
            <h1 className="text-warning fs-3 fw-bold">Welcome</h1>
            <p>Create your new account</p>
          </div>
          <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control p-3" value={username} id="name" onChange={(e) => setUsername(e.target.value)} placeholder="Name" />
                  </div>
          <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control p-3" value={email} id="email" onChange={(e) => setEmail(e.target.value)} placeholder="E-mail" />
                  </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control p-3" value={password} id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                  </div>
          <button className="btn btn-warning text-white" type="submit">
            register
          </button>
        </form>
      </div>
      </>
    )
  }
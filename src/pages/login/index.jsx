import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/css/login.css'
const baseUrl = import.meta.env.VITE_BASE_URL;

export default function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [data, setData] = useState();
  const navigate = useNavigate();

  const SignIn = (e) => {
    e.preventDefault()
    axios
      .post(
        baseUrl + '/user/login',
        {
          email,
          password
        },
        { headers: { "content-type": "application/x-www-form-urlencoded" } }
      )
      .then((res) => {
        console.log(res);
        localStorage.setItem("name", res.data.data.username);
        localStorage.setItem("token", res.data.data.token);
        localStorage.setItem("uuid", res.data.data.uuid);
        localStorage.setItem("photo", res.data.data.photo);
        setData(res.data.data);
        alert(`Welcome ${localStorage.getItem("name")}`)
        navigate("/searchMenu");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("axios login");
  };
  useEffect(() => {
    let item = {
      username: localStorage.getItem("name"),
      token: localStorage.getItem("token"),
    };
    localStorage.getItem("name") && setData(item);
  }, []);

  return (
    <>
      <div className="container-fluid d-flex justify-content-center mt-5">
        <form onSubmit={SignIn} className="d-grid w-25">
          <div className="text-center mb-5">
            <h1 className="text-warning fs-3 fw-bold">Welcome</h1>
            <p>Log in into your exiting account</p>
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
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL


export default function Navbar({color}) {

  const[data, setData] = useState()
  
  const Log = () =>{
    if(localStorage.getItem('name')){
      setData(null)
      localStorage.clear()
      return
    }

    axios.post(baseUrl + `/user/login`, {
      email: 'member@recipe.com',
      password: 'testing1'
    }, {headers: {'content-type': 'application/x-www-form-urlencoded'}})
    .then((res)=>{
      console.log(res);
      localStorage.setItem('name', res.data.data.username)
      localStorage.setItem('token', res.data.data.token)
      localStorage.setItem('uuid', res.data.data.uuid)
      setData(res.data.data)
    })
    .catch((err)=>{
        console.log(err);
    })
    console.log('axios login');

  }

  useEffect(()=>{
    let item = {
      username: localStorage.getItem('name'),
      token: localStorage.getItem('token')
    }
    localStorage.getItem('name') && setData(item)
  },[])


  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-light bg-${color} px-5`}>
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
          <div className="offcanvas-body" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to='/register' className="nav-link">Register</Link>
              </li>
              <li className="nav-item">
                <Link to='/Login' className="nav-link">Login</Link>
              </li>
              <li className="nav-item">
                <Link to='/' className="nav-link">Search Menu</Link>
              </li>
            </ul>
          </div>
        </div>
        <h2>{data?.username}</h2>
            <button className="btn btn-warning ms-3" onClick={Log}>
              {data ?'Logout':'Login'}
            </button>
        </div>
      </nav>
    </div>
  );
}

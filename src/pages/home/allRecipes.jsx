import Navbar from "../../components/Navbar"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Foot from "../../components/Footer/";
import '../../assets/css/search-menu.css'
import { useDispatch, useSelector } from "react-redux";
import { getMenu } from "../../redux/actions/menu";


export default function SearchMenu(){
    const dispatch = useDispatch()
    const menu = useSelector((state)=>state.menu)
    const navigate = useNavigate()

    useEffect(()=>{
      dispatch(getMenu())
    },[])

    const toDetailMenu = id =>{
      navigate(`/menu-detail/${id}`)
    }

    return(
      <>
      <Navbar nav1='Login' link1='/login' nav2='Add Recipe' link2='/add-menu' nav3='register' link3='/register'></Navbar>
        <div className="container-fluid mt-5">
        <div className="box1 ms-5">
          <h1 className="fw-bold">Discover Recipe & Delicious Food</h1>
          <form className="d-flex mb-3" role="search">
            <input className="form-control me-2" type="search" placeholder="Telur Gulung" aria-label="Search" />
            <button className="btn btn-warning text-white" type="submit">Search</button>
          </form>
        </div>
        {menu.isLoading ? <div className="spinner-border text-warning" role="status"></div>:null}
          {menu.isSuccess ? menu.data?.map((item, index)=>{
            return(
              <div className="card col-sm-8 mb-3 mt-5 ms-5 border-0" style={{maxWidth: '900px'}}>
                <div className="row">
                <div className="col-sm-4">
                    <img src={item.photo} onClick={()=>toDetailMenu(item.id)} className="img-fluid rounded-start" />
                  </div>
                <div className="col-md-8">
                <div className="card-body">
                <h3 className="card-title" key={index+1}>
                  {item.title}
                  </h3>
                  <p>{item.ingredients}</p>
                  <div className="badge bg-warning text-wrap text-white">
                        10 Likes - 12 Comment - 3 Bookmark
                      </div>
                </div>
              </div>
                </div>
                </div>
             )
          }): null}
        </div>
        <Foot />
      </>
    )
  }
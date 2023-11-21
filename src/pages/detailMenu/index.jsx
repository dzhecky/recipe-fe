import Navbar from "../../components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

const baseUrl = import.meta.env.VITE_BASE_URL


export default function DetailMenu(){
    const navigate = useNavigate()
    const {id} = useParams()
    const [data, setData] = useState()

    useEffect(()=>{
        axios.get(baseUrl + `/recipe/${id}`)
        .then((res)=>{
            setData(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    const deleteMenu = () =>{
        axios.delete(baseUrl + `/recipe/${id}`,{
            headers: {
                'Authorization' : `Bearer ${localStorage.getItem('token')}`
              }
        })
        .then((res)=>{
            console.log(res);
            navigate('/')
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return(
      <>
      <Navbar color='secondary'></Navbar>
        <div className="container">
          <h1>Detail Menu Recipe</h1>
          <h2>{data?.title} - {data?.id}</h2>
          {data?.ingredients?.map((item, index)=><h6 key={index+1}>{item}</h6>)}

          {localStorage.getItem('uuid')=== data?.users_id? <>
          <button className="btn btn-danger ms-3" onClick={deleteMenu}>
              Delete
            </button>
          <button className="btn btn-primary ms-3">
              Edit
            </button>
          
          </> :null}

        </div>
      </>
    )
  }
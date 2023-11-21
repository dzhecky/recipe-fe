import Navbar from "../components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const baseUrl = import.meta.env.VITE_BASE_URL


export default function SearchMenu(){
    const navigate = useNavigate()
    const [data, setData] = useState()

    useEffect(()=>{

        let menuUrl = localStorage.getItem('token') ? `/recipe` : `/recipe/detail`

        axios.get(baseUrl + menuUrl,{
          headers: {
            'Authorization' : `Bearer ${localStorage.getItem('token')}`
          }
        })
        .then((res)=>{
            setData(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    useEffect(()=>{
        console.log(data);
    },[data])

    const toDetailMenu = id =>{
      navigate(`/menu-detail/${id}`)
    }

    return(
      <>
      <Navbar color='secondary'></Navbar>
        <div className="container">
          <h1>Search Menu</h1>

          {data?.map((item, index)=>{
            return(
                <h1 key={index+1} onClick={()=>toDetailMenu(item.id)}>
                  {index+1} - {item.title}
                  </h1>
            )
          })}
        </div>
      </>
    )
  }
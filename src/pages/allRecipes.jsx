import Navbar from "../components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"

const baseUrl = 'https://zany-tan-leopard-gown.cyclic.app'


export default function SearchMenu(){
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

    return(
      <>
      <Navbar color='secondary'></Navbar>
        <div className="container">
          <h1>Search Menu</h1>

          {data?.map((item, index)=>{
            return(
                <h1 key={index+1}>
                  {index+1} - {item.title}
                  </h1>
            )
          })}
        </div>
      </>
    )
  }
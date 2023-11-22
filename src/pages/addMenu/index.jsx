import React from "react";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router";
import { useState } from "react";
import axios from "axios";

export default function AddMenu() {

  const baseUrl = import.meta.env.VITE_BASE_URL

  const navigate = useNavigate();
  const [photo, setPhoto] = useState();
  const [inputData, setInputData] = useState({
    id:"",
    title: "",
    ingredients: "",
    category_id: 1,
    photo_url: ""
  });

  const postData = (event) => {
    event.preventDefault()
    let bodyData = new FormData()
    bodyData.append('id', inputData.id)
    bodyData.append('tittle', inputData.title)
    bodyData.append('ingredients', inputData.ingredients)
    bodyData.append('category_id', inputData.category_id)
    bodyData.append('photo', photo)
    console.log(bodyData);

    axios.post(baseUrl +'/recipe',bodyData,{
      headers:{
        'Authorization' : `Bearer ${localStorage.getItem('token')}`,
        'Content-Type' : 'multipart/form-data'
      }
    }).then((res)=>{
      console.log('succes add data');
      console.log(res);
      navigate('/')
    }).catch((err)=>{
      console.log('failed add data');
      console.log(err);
    })

  };

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log("input", e.target.name, e.target.value);
    console.log(inputData);
  };

  const onChangePhoto = (e) =>{
    setPhoto(e.target.files[0])
    e.target.files[0] && setInputData({...inputData, photo_url:URL.createObjectURL(e.target.files[0])})
    console.log(e.target.files[0]);
  }

  return (
    <>
      <Navbar color="secondary"></Navbar>
      <div className="container col-4">
        <h2>Add New Menu</h2>
        <form onSubmit={postData}>
          {photo && <img src={inputData.photo_url} width={200} /> }
          <div className="mb-3">
            <label className="form-label">Select Photo</label>
            <input className="form-control" type="file" id="validatedCustomFile" onChange={onChangePhoto} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Id</label>
            <input
              type="text"
              className="form-control"
              id="id"
              name="id"
              placeholder="Your Menu ID"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Menu Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="Your Menu Name"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Ingredients</label>
            <textarea
              type="text"
              className="form-control"
              id="ingredients"
              name="ingredients"
              onChange={onChange}
              placeholder="The Ingredients"
              row="5"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Category</label>
            <select className="form-select">
              <option selected>Open this select menu</option>
              <option value={1}>Main Course</option>
              <option value={2}>Appetizer</option>
              <option value={3}>Desert</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

import Navbar from "../../components/Navbar";
import { getMenuDetail } from "../../redux/actions/menu";
import { useDispatch, useSelector } from "react-redux";
import Foot from "../../components/footer";
import '../../assets/css/add-menu.css'
import { useNavigate } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
const baseUrl = import.meta.env.VITE_BASE_URL

export default function EditMenu() {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState();
  const dispatch = useDispatch()
  const menuDetail = useSelector((state)=>state.menuDetail)
  
  const [inputData, setInputData] = useState({
    id:"",
    title: "",
    ingredients: "",
    category_id: 1,
    photo_url: ""
  });

  useEffect(() => {
    dispatch(getMenuDetail());
  }, [dispatch]);

  
  useEffect(()=>{
      if(inputData){
          setInputData({
              id: inputData.id,
              title: inputData.title,
              ingredients: inputData.ingredients,
              category_id: inputData.category_id,
              photo: inputData.photo
            })
        }
    },[])

    const putData = (event) => {
      event.preventDefault()
      let bodyData = new FormData()
      bodyData.append('id', inputData.id)
      bodyData.append('title', inputData.title)
      bodyData.append('ingredients', inputData.ingredients)
      bodyData.append('category_id', inputData.category_id)
      bodyData.append('photo', photo)
      console.log(bodyData);
  
      axios.put(baseUrl + `/recipe/${menuDetail.data.id}`, bodyData,{
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
      <Navbar nav1='Home' link1='/home' nav2='Search Menu' link2='/searchMenu' nav3='Profile' link3='/profile'></Navbar>
      <div className="container-fluid d-flex justify-content-center mt-5">
        <form onSubmit={putData} className="d-grid w-75">
          {photo && <img src={inputData.photo_url} width={200} /> }
          <div className="mb-3">
            <label className="form-label">Select Photo</label>
            <input className="form-control" type="file" id="validatedCustomFile" onChange={onChangePhoto} required />
          </div>
          <div className="mb-3">
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
            <textarea
              type="text"
              className="form-control"
              id="ingredients"
              name="ingredients"
              onChange={onChange}
              placeholder="The Ingredients"
              rows="7"
            />
          </div>
          <div className="mb-3 w-25">
            <select className="form-select">
              <option selected>Category</option>
              <option value={1}>Main Course</option>
              <option value={2}>Appetizer</option>
              <option value={3}>Desert</option>
            </select>
          </div>
          <button type="submit" className="btn btn-warning mt-3 mb-5">
            {localStorage.getItem('token')? 'Submit' : alert('Please login to add a recipe!')}
          </button>
        </form>
      </div>
      <Foot />
    </>
  );
}

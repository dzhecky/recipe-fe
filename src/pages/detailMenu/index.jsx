import Navbar from "../../components/Navbar"
import Foot from "../../components/footer"
import '../../assets/css/detail-menu.css'
import Profile from '../../assets/prof.png'
import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getMenuDetail, deleteMenu } from "../../redux/actions/menu"


export default function DetailMenu(){
    const dispatch = useDispatch()
    const {menuDelete, menuDetail} = useSelector((state)=>state)
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        dispatch(getMenuDetail(id))
    },[])

    const deleteYourMenu = () =>{
        alert('are you sure delete this data?')
        dispatch(deleteMenu(id,navigate))
    }
    
    const handleEdit = (recipeId) => {
        navigate(`/edit-menu/${recipeId}`);
  };

    return(
      <>
      <Navbar nav1='Home' link1='/home' nav2='Add Recipe' link2='/add-menu' nav3='Search Menu' link3='/searchMenu'></Navbar>
        <div className="container-fluid">
        <section>
        <div className="container mt-5">
            <div className="header">
                <div className="profile">
                {menuDetail?.photo ? <img src={menuDetail.photo} width={50}/> : null}
                    <div className="detail d-flex">
                        <img src={Profile} style={{width: '50px'}} />
                        <div className="test">
                        <p>{localStorage.getItem('name')}</p>
                        <p className="fw-bold">10 Recipes</p>
                        </div>
                    </div>
                </div>
                <div className="dates">
                    <p>21 February 2023</p>
                    <p>20 Likes - 2 Comments</p>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="container mt-5">
            {menuDetail.isLoading ? <div className="spinner-border text-warning" role="status"></div>:null}
            <div className="grand-content">
                <h1>{menuDetail.data?.title}</h1>
                {menuDetail.data?.photo ? <img src={menuDetail.data?.photo} width={500}/> : null}
            </div>
            {localStorage.getItem('uuid') === menuDetail.data?.users_id? <>
            <div className="wrapper text-center mt-5">
          <button className="btn btn-danger" onClick={deleteYourMenu}>
              Delete
            </button>
          <button className="btn btn-primary ms-2" onClick={() => handleEdit(menuDetail.data.id)}>
              Edit
            </button>

            </div>
          
          </> :null}
            <div className="ingredients p-5">
                <h3>Ingredients</h3>
                <ul>
                {menuDetail.data?.ingredients?.map((item)=><li>{item}</li>)}
                </ul>
            </div>
        </div>
    </section>
      <section>
        <div className="comment">
            <div className="user">
                <img src={Profile} />
                <div className="text">
                    <p>Ayudia</p>
                    <p className="fw-bold">10 Recipes</p>
                </div>
                <div className="words">
                    <p className="ms-5">Wow, I just made this and it was delicious! Thanks for sharing!</p>
                </div>
            </div>
            <div className="user">
                <img src={Profile} />
                <div className="text">
                    <p>Ayudia</p>
                    <p className="fw-bold">20 Recipes</p>
                </div>
                <div className="words">
                    <p className="ms-5">So simple and delicious!</p>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div className="bottom">
            <textarea className="form-control w-50" id="exampleFormControlTextarea1" rows="7" placeholder="Your comments here"></textarea>
            <button type="button" className="btn btn-danger mt-5 w-25 disabled">Send a comment</button>
        </div>
    </section>
        </div>
        <Foot />
      </>
    )
  }
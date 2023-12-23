import Navbar from "../../components/Navbar"
import Foot from "../../components/Footer/";
import '../../assets/css/landing.css'

export default function Home(){

    return(
      <>
      <Navbar nav1='Register' link1='/register' nav2='Login' link2='/login' nav3='Search Menu' link3='/searchMenu'></Navbar>
        <div className="container-fluid d-flex flex-wrap">
        <div className="box1 my-auto ms-5">
          <div className="hero"></div>
          <h1 className="fw-bold">Discover Recipe & Delicious Food</h1>
            <input type="text" placeholder="Search" className="mb-3" />
            <img src="./images/search.svg" />
        </div>
            <div className="box2 mx-auto">
                <img src="layout1.png" /> 
            </div>
        </div>
    <section className="two position-relative mt-5">
      <div className="container-fluid d-flex flex-wrap">
        <div className="box3 ms-5">
          <h3 className="border-start border-warning border-5 mb-5 p-2">Popular For You!</h3>
          <img src='layout2.png' className="" />
        </div>
        <div className="hero2"></div>
        <div className="box4 my-auto mx-auto">
          <h1 className="fw-bold">Healthy Bone Broth Ramen (Quick & Easy)</h1>
          <hr className="border-2 w-25" />
          <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That's right!</p>
          <button className="btn btn-warning">Learn More</button>
        </div>
      </div>
    </section>
    <section className="three position-relative mt-5">
      <div className="container-fluid d-flex flex-wrap">
        <div className="box5 ms-5">
          <h3 className="border-start border-warning border-5 mt-5 mb-5 p-2">New Recipe</h3>
          <img src="layout3.png" />
        </div>
        <div className="hero3"></div>
        <div className="box6 my-auto mx-auto">
          <h1 className="fw-bold">Healthy Bone Broth Ramen (Quick & Easy)</h1>
          <hr className="border-2 w-25" />
          <p>Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That's right!</p>
          <button className="btn btn-warning"><a href="detailMenu.html" className="text-decoration-none text-white">Learn More</a></button>
        </div>
      </div>
    </section>
        <Foot />
      </>
    )
  }
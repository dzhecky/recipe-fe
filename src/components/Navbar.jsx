import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Profile from '../assets/prof.png'
import { useState } from "react";
import '../assets/css/navbar.css'
export default function Navbar({ nav1, nav2, nav3, link1, link2, link3 }) {
  const [data, setData] = useState();
  const navigate = useNavigate();

  const LogoutHandle = () => {
    setData(null);
    localStorage.clear();
    navigate("/");
    return;
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light p-5">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body" id="navbarNav">
              <ul className="navbar-nav gap-5">
                <li className="nav-item">
                  <Link to={link1} className="nav-link">
                    {nav1}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={link2} className="nav-link">
                    {nav2}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={link3} className="nav-link">
                    {nav3}
                  </Link>
                </li>
              </ul>
              {localStorage.getItem('name') ? <>
                <div className="navbar-nav ms-auto">
                  <div className="profiles">
                    <img
                      src={Profile}
                      alt=""
                      className="rounded-circle"
                      width="40"
                      height="40"
                    />
                    <div className="desc ml-2">
                      <p className="name m-auto">{localStorage.getItem('name')}</p>
                      <Link onClick={LogoutHandle} className="nav-link">
                        Logout
                      </Link>
                    </div>
                  </div>
                </div>
              </>: null}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

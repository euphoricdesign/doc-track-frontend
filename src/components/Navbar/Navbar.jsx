import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUnAuthenticated } from "../../redux/userSlice";
import { removeUserFromLocalStorage } from "../../helpers/localStorage";
import "./Navbar.css";

const Navbar = () => {
  const [isSidebarClose, setIsSidebarClose] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUnAuthenticated());
    removeUserFromLocalStorage();
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleSidebar = () => {
    setIsSidebarClose(!isSidebarClose);
  };
  return (
    <>
      <nav className={`sidebar ${isSidebarClose ? "close" : ""}`}>
        <header>
          <div className="image-text">
            <span className="image">
              <img src="logo.png" alt="" />
            </span>

            <div className="text logo-text">
              <span className="name">DocTrack</span>
            </div>
          </div>
          <i
            className="bx bx-chevron-right toggle fa fa-arrow-right"
            onClick={toggleSidebar}
          ></i>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <ul className="menu-links">
              <Link to="/">
                <li className="nav-link">
                  <i className="fa fa-home fa-lg icon"></i>
                  <span className="text nav-text">Home</span>
                </li>
              </Link>

              {/* <Link to="/perfil">   
                            <li className="nav-link">    
                                <i className="fa fa-user fa-lg icon"></i>
                                <span className="text nav-text">Perfil</span>
                            </li>
                        </Link> */}

              <Link to="/appointments">
                <li className="nav-link">
                  <i className="fa fa-calendar fa-lg icon"></i>
                  <span className="text nav-text">Appointments</span>
                </li>
              </Link>
            </ul>
          </div>

          <div className="bottom-content">
            <ul>
              <li style={{ cursor: "pointer" }} onClick={handleLogout}>
                <i className="bx bx-log-out icon fa fa-sign-out"></i>
                <span className="text nav-text">Logout</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

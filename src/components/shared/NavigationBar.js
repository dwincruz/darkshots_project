import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/brand/darkshot-logo.png";
import ThemeButton from "../buttons/ThemeButton";
const NavigationBar = ({ links }) => {
  const [navLinks, setNavLinks] = useState(links);
  const navLinkRef = useRef(null); //in-progress adding useRef hook
  const [activeItem, setActiveItem] = useState(null);
  const [activeUser, setActiveUser] = useState(null);
  const currentUserAPI = "http://localhost:3001/api/user/current-user";
  const signoutUserAPI = "http://localhost:3001/api/user/logout";

  const handleLogout = (event) => {
    fetch(signoutUserAPI, {
      method: "post",
      credentials: "include",
    })
      .then(async (response) => {
        if (response.status == 200) {
          const status = await response.json();
          setActiveUser(null);
        }
      })
      .catch((error) => console.log({ error: error.message }));
  };
  const handleItemClick = (event) => {
    if (activeItem) {
      activeItem.classList.remove("active");
    }
    event.target.classList.add("active");
    setActiveItem(event.target);
  };
  const logoImage = {
    height: "30px",
    objectFit: "cover",
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetch(currentUserAPI, {
          method: "post",
          credentials: "include",
        })
          .then(async (response) => {
            if (response.status == 200) {
              const data = await response.json();
              setActiveUser(data);
            }
          })
          .catch((error) => console.log({ error: error.message }));
      } catch (error) {
        console.log({ message: error.message });
      }
    };
    fetchData();
  });

  return (
    <nav
      className="navbar  navbar-expand-lg navbar-dark fixed-top  px-5"
      style={{ zIndex: "3", backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <Link className="navbar-brand " to="/">
        <img src={logo} className="img img-fluid" style={logoImage} />
      </Link>

      <>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto my-auto" ref={navLinkRef}>
            {navLinks.length > 0
              ? navLinks.map((navLink) => {
                  return (
                    <li
                      key={navLink.navId}
                      className="nav-item"
                      onClick={handleItemClick}
                    >
                      <a
                        className="nav-link  text-uppercase"
                        href={navLink.redirectTo}
                        style={{ fontFamily: "Agdasima-Bold" }}
                      >
                        {navLink.name}
                      </a>
                    </li>
                  );
                })
              : ``}
          </ul>
          {activeUser != null ? (
            <ul className="navbar-nav ">
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle text-white  text-uppercase"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontFamily: "Agdasima-Bold" }}
                >
                  {activeUser.username}
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <ThemeButton
                      textName="Logout"
                      clickTrigger={handleLogout}
                    />
                  </li>
                </ul>
              </li>
            </ul>
          ) : (
            <>
              <ThemeButton
                textName="Register"
                redirectTo={window.origin + "/register"}
              />

              <ThemeButton
                textName="Sign in"
                primary={false}
                redirectTo={window.origin + "/signin"}
              />
            </>
          )}
        </div>
      </>
    </nav>
  );
};

export default NavigationBar;

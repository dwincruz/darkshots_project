import React, { useEffect, useRef } from "react";
import "../../styles/admin.css";
import Logo from "../../assets/images/brand/darkshot-logo.png";
import { Link, Outlet } from "react-router-dom";

const InternalLayout = ({ content }) => {
  const btnMenu = useRef(null);
  const linkMenu = useRef(null);
  const accessLists = [
    {
      navId: 1,
      name: (
        <span>
          <i className="ri-layout-grid-fill px-2"></i>Dashboard
        </span>
      ),
      redirectTo: "/admin/dashboard",
    },
    {
      navId: 2,
      name: (
        <span>
          <i className="ri-account-circle-fill px-2"></i>Users
        </span>
      ),
      redirectTo: "/admin/users",
    },
    {
      navId: 3,
      name: (
        <span>
          <i className="ri-article-fill px-2"></i>Manage Content
        </span>
      ),
      subdirectory: [
        {
          navId: 1,
          subName: "Services",
          subRedirectTo: "/",
        },

        {
          navId: 2,
          subName: "Projects",
          subRedirectTo: "/admin/projecrs",
        },
        {
          navId: 3,
          subName: "team",
          subRedirectTo: "/admin/team",
        },
      ],
    },
    {
      navId: 4,
      name: (
        <span>
          <i className="ri-file-user-fill px-2"></i>Applicants
        </span>
      ),
      redirectTo: "/applicants",
    },
  ];
  const btnMenuBar = () => {
    btnMenu.current = document.querySelector(".admin-layout");
    btnMenu.current.classList.toggle("toggled");
  };
  return (
    <div ref={btnMenu} className="d-flex admin-layout">
      <div className="sidenav">
        <ul className="list-group sidebar-header p-3">
          <li className="list-group-item m-auto">
            <img src={Logo} alt="logo" className="img img-fluid" />
          </li>
        </ul>

        <ul className="list-group">
          {accessLists.map((listItem) => {
            return (
              <li key={listItem.navId} className="list-group-item">
                <Link to={listItem.redirectTo} className="list-item-link">
                  {listItem.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="nav-wrapper">
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
          <div className="col-lg-10">
            <button className="btn btn-sm m-2" onClick={btnMenuBar}>
              <i className="ri-menu-2-fill text-white"></i>
            </button>
          </div>
          <div className="col-lg-2">
            <label className="btn btn-sm btn-transparent text-sm text-gray-700 dark:text-gray-500 underline">
              Welcome
            </label>
          </div>
        </nav>

        <main className="container-fluid p-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
export default InternalLayout;

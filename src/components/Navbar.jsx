import React, { useContext } from 'react'
import { MyContext } from '../context/contextProvider';
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";
const Navbar = () => {
    const [search, setsearch] = useContext(MyContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary position-absolute top-0 start-0 col-12">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
          <img src={logo} className="card-img-top" style={{ width: "70px" }} alt="logo" />
          </a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-3 mb-lg-0">
              <li className="nav-item">
              <Link to={`/`}>
                <button className="btn btn-outline-dark ms-5 btn-sm" >
                  Home
                </button>
              </Link>
              </li>
              <li className="nav-item">
              <Link to={`/Watchlist`}>
                <button className="btn btn-outline-dark ms-5 btn-sm" >
                  Watch List
                </button>
              </Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                value={search}
                placeholder="Search"
                aria-label="Search"
                onChange={(e)=> setsearch(e.target.value)}
              />
              <Link to={`/`}>
                <button className="btn btn-outline-success" type="submit" >
                  Search
                </button>
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
import React from 'react'
import logo from '../../assets/branch-1.svg'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return<>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light ">
  <div class="container">
    <Link class="navbar-brand" to="/">
      <img src={logo} className='w-100' alt="logo" />
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <NavLink class="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link " aria-current="page" to="about">ABOUT US</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link " aria-current="page" to="life">SCHOOL LIFE</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link " aria-current="page" to="/toapply">Toapply</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link " aria-current="page" to="countact">CONTACT US</NavLink>
        </li>
        
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-info" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  </>
}

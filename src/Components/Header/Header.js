import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {
             props.menu.map(item=>{
             return ( <li key={item.sr} id="{item.sr}" className="nav-item">
               <Link className="nav-link active" aria-current="page" to={item.link}>{item.text}</Link>
             </li>)
              })
          }
        
      
      </ul>
      {
          props.isSearchEnable?
          <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
          :""
      }
   
    </div>
  </div>
</nav>
  </>
  )
}
Header.defaultProps= {
    title : "Default Title",
    isSearchEnable: true ,
    
}
Header.propTypes = {
title : propTypes.string,
isSearchEnable: propTypes.bool,
menu: propTypes.array,
}

export default Header


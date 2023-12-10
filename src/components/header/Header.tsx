import React, { FC } from 'react'
import "./header.css"
import { Link } from 'react-router-dom'
const Header:FC = () => {
  return (
    <header className="header">
    <Link to="/" className="logo" data-test-id="logo">Stars</Link>
    <div className=" header-right">
     <Link className="item active" to="/">Home</Link>
      <Link className="item active" to="/categories">Categories</Link>
      <Link className="item active" to="/about">About</Link>
    </div>
  </header>
  )
}

export default Header
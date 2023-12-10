import React from 'react'
import "./card.css"
import { Link } from 'react-router-dom'
const Card = ({name}:{name:string}) => {
  return (
    <Link to={`/categories/${name}`}>
    <div className="card">
      <p className="text">{name}</p>
    </div>
    </Link>

  )
}

export default Card
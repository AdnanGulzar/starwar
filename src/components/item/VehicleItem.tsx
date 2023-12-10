import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom';
const VehicleItem = ({item}:{item:Vehicle}) => {
    console.log(item);
  return (
    <Link to={`/item/${item.name}?category=vehicles`}>
    <div className='wrapper container' >
 <div className='wrapper'>

   <h1>{item?.name} </h1>
   <p>{item?.manufacturer}{item?.model}</p>
  </div>

    </div>
    </Link>

  )
}

export default VehicleItem
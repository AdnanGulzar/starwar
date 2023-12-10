import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom';
const PeopleItem = ({item}:{item:Character}) => {
    console.log(item);
  return (<Link to={`/item/${item.name}?category=people`}>
    <div className='wrapper container' >
 <div className='wrapper'>
  
   <h1>{item?.name} </h1>
   <p>{item?.eye_color} {item?.hair_color}</p>
  </div>

    </div>
    </Link>
  )
}

export default PeopleItem
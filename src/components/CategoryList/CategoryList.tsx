import React from 'react'
import "./category.css"
import Card from '../card/Card'
const CategoryList = () => {
  return (
    <div className='container'>
        <h1>Categories</h1>
        <div className='cardContainer'>
            <Card name={"people"}/>
            <Card name={"films"}/>
            <Card name={"vehicles"} />
          
            

        </div>
    </div>
  )
}

export default CategoryList
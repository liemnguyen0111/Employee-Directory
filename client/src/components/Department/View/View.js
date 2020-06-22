  
import React, {useState, useEffect} from 'react'
import Card from "./Card"
import image from '../lib/emp.png'

const View = ({data,sort}) => {
  // let a = data.map(item => console.log(item))
  // Adjust background image on window resize
  const [ windowHeight , setwindowHeight ] = useState (window.innerHeight)

  const handleResize = () =>
{
  setwindowHeight(window.innerHeight)
}

const [items , setItems ] = useState([])


// useEffect for window resize
useEffect(() =>
{  
  
  if(data)
  { 
    console.log(sort) 
    setItems(data.map(item => {
    return item.employees.map(employee => (
      
       {
          id : employee._id,
          department : item.name, 
          fName : employee.fName,
          lName : employee.lName,
          title : employee.role.title,
          salary : employee.role.salary }
          ))
  }))
}

 window.addEventListener('resize', handleResize)
 return () =>{ window.removeEventListener('resize',handleResize)}
}
,[window.innerHeight,data])



  return (
    <div className="view" style={{maxHeight : windowHeight * .85 }}>
    {
     items?
      items.map(item => 
        item.map(each => <Card key={each.id} data={each} img={image}/>)
        ): null
    }

    </div>
  )
}

export default View
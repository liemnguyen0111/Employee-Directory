  
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
  const temp = []
  if(data)
  { 
   
    
   data.map(item => {
    return item.employees.map(employee => (
      
      temp.push({
          id : employee._id,
          department : item.name, 
          fName : employee.fName,
          lName : employee.lName,
          title : employee.role.title,
          salary : employee.role.salary })
          ))
  })
  setItems(temp)
  if(sort)
  {
    console.log(sort)
    switch(sort.cat)
    {
          case 'Department' :
            setItems(temp.filter(item => item.department === sort.name))
          break;
          case 'Role' :
            setItems(temp.filter(item => item.title === sort.name))
          break;
          case 'Name':
            if(sort.name === 'ASC')
            {
              setItems(temp.sort((a, b) => (a.fName > b.fName) ? -1 : 1))
            }
            if(sort.name === 'DESC')
            {
             setItems(temp.sort((a, b) => (a.fName > b.fName) ? 1 : -1))
            }
          break;
    }

  }
 
  console.log(items)
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
        <>
        <Card key={item.id} data={item} img={image}/>
        </>

        ): null
    }

    </div>
  )
}

export default View
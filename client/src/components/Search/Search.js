  
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './Search.css'

const orderByName = ['Select','ASC','DESC']
let orderByRole =[]
let orderByDepartment =[]
const selection = {Department : false, Role : false, Employee : false}
const Search = (props) => {
 
  const [current, setCurrent] = useState('')
 
  const onSlectionChange = event =>
  {   
      selection[current] = false
      selection[event.target.value] = true
      setCurrent(event.target.value)
  }
  
  useEffect(() =>
  {  
      axios.get('api/roles')
      .then(({data}) => {
            orderByRole = data.map((item) => {return item.title}, [] )
            orderByRole.unshift('Select')
      })
      .catch(err => console.error(err))

      axios.get('api/departments')
      .then(({data}) => {
            orderByDepartment = data.map((item) => {return item.name}, [] )
            orderByDepartment.unshift('Select')
      })
      .catch(err => console.error(err))
     return () =>{Object.keys(selection).map( (item) => {selection[item] = false})}   
  }
  ,[])

  return (
   <>
   <form onChange={props.onOptionChange}>
       <label htmlFor="sort">Sort by: </label>
       <select name="sort" onChange={onSlectionChange} >
             <option value="None" >None</option>
             <option value="Department">Department</option>
             <option value="Role">Role</option>
             <option value="Employee">Employee</option>
       </select>

        {selection['Employee']?
       <select name="Name" >
             {orderByName.map(item =>  <option key={item} value={item}>{item}</option>)}
       </select> : null
       }

        {selection['Role']?
       <select name="Role" >
             {orderByRole.map(item =>  <option key={item} value={item}>{item}</option>)}
       </select> : null
       }

        {selection['Department']?
       <select name="Department">
             {orderByDepartment.map(item =>  <option key={item} value={item}>{item}</option>)}
       </select> : null
       }        
   </form>
   </>
  )
}

export default Search
  
import React, {useState} from 'react'
import '../Add.css'
import axios from 'axios'

const Department = (props) => {

  const cancel = () =>
  {
    props.setCurrent('')
  }

  const handleSubmit = event =>
  {
    event.preventDefault()
    axios.post('api/departments',{name : event.target.deptName.value})
    console.log(event.target.deptName.value)
  }
  return (
    <div className="addItem">
        <h1>Add New Department</h1>
       <form onSubmit={handleSubmit}>
           <input type="text" name="deptName" placeholder="Department name"/>    
           <input type="submit" className="submit" value="Add"/>
           <button className="cancel" onClick={cancel}>X</button>
       </form>
    </div>
  )
}

export default Department
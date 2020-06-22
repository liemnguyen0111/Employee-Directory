  
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
    .then(()=> console.log('Ok'))
    .catch(err => console.error(err))
    
    event.target.reset()
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
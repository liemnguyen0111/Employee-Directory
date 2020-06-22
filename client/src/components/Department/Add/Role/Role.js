  
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../Add.css'

const Role = (props) => {

  const addRole = event =>
  {
    event.preventDefault()
    console.log(event.target.department.value)
    axios.post('api/roles',
    {title : event.target.title.value, 
      salary : event.target.salary.value, 
      department : event.target.department.value })
    .then(({data}) => console.log(data))
    .catch(err => console.error(err))
    event.target.reset()
  }

  const cancel = () =>
  {
    props.setCurrent('')
  }

  const [list , setList] = useState([])

  useEffect(() =>
  {
    axios.get('api/departments')
  .then(({data}) => {setList(data.map(item => ( {name: item.name, id : item._id})))})
  .catch(err => console.error(err))
  },[])

  return (
    <div className="addItem"  >
    <h1>Add New Title</h1>
     <form onSubmit={addRole}>
       
         <input type="text" name="title" placeholder="Title"/>
          <br/>

        <input type="number" name="salary" placeholder="Salary"/>
        <br/>

         <label htmlFor="department">Department </label>
         
        {list?
          <select name="department" >
        {list.map(item => <option key={item.name} value={item.id}>{item.name}</option>)}
         </select>  : null
        }
       

          <button className="cancel" onClick={cancel}>X</button>
         <input type="submit" className="submit" value="Add"/>
     </form>
  </div>
  )
}

export default Role
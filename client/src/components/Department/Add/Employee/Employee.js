  
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../Add.css'

const Employee = (props) => {

  const addEmployee = event =>
  {
    event.preventDefault()
    console.log(event.target)
    axios.post('api/employees',
    {fName : event.target.fName.value , 
      lName : event.target.lName.value, role : event.target.role.value, 
      department : event.target.department.value})
      .then(({data}) => console.log(data))
      .catch(err => console.error(err))
      event.target.reset()
  }

  const cancel = () =>
  {
    props.setCurrent('')
  }

  const deptOnChangeHandle = (event) =>
  {
      console.log(event.target.value)
      if(event.target.value !== 'Select')
      {
        setAvailable('No role available')
        setRole()
       }
      else {setAvailable()}

      axios.get(`api/departments/${event.target.value}`)
      .then(({data}) => {
        if(data.roles.length > 0)
        {
          setRole(data.roles.map(item => ({name: item.title, id : item._id})))
          setAvailable()
        }
      })
      .catch(err => console.error(err))
  }

  const [dept , setDept] = useState()
  const [role , setRole] = useState()
  const [available , setAvailable] = useState('')

  useEffect(() =>
  {
    axios.get('api/departments')
  .then(({data}) => {setDept(data.map(item => ( {name: item.name, id : item._id})))})
  .catch(err => console.error(err))
  },[])

  return (
    <div className="addItem"  >
      <h1>Add New Emplpoyee</h1>
       <form onSubmit={addEmployee}>
         
           <input type="text" name="fName" placeholder="First Name"/>
            <br/>
          
           <input type="text" name="lName" placeholder="Last Name"/>
           <br/>

               {dept?
               <>
              <label htmlFor="department">Department </label>
              <select name="department" onChange={deptOnChangeHandle}>
              <option value="Select">Select</option>
             {dept.map(item => <option key={item.name} value={item.id}>{item.name}</option>)}
             </select> </>: null
              }

              {role?
               <>
               <label htmlFor="role">Role  </label>
              <select name="role" >
             {role.map(item => <option key={item.name} value={item.id}>{item.name}</option>)}
             </select> </>: null
              }
              {available}

           <button className="cancel" onClick={cancel}>X</button>
           <input type="submit" className="submit" value="Add"/>
       </form>
    </div>
  )
}

export default Employee
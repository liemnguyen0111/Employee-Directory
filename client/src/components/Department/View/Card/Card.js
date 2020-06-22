  
import React from 'react'
import NumberFormat from 'react-number-format'

const Card = (data) => {

  return (
 <>
      <div className="card">
      <img src={data.img} alt="emp"/>
      <div className="card-body">
     <h2 className="card-title">{data.data.fName + " " + data.data.lName}</h2>

        <p className="card-text">Department: {data.data.department}</p>
        <p className="card-text">Title:  {data.data.title}</p>
        <p className="card-text">Salary: 

        <NumberFormat 
        value={data.data.salary} 
        displayType={'text'} 
        thousandSeparator={true} 
        prefix={' $'} 
        suffix={'.00'}
        style={{backgroundColor :'rgba(255, 1, 1, 0)'}}/>
        </p>
      </div>
    </div>
</>

  
  )
}

export default Card
  
const { model, Schema } = require('mongoose')

const Department = new Schema({
  name: 
  {
    type : String,
    unique : true
  },
  roles : [{
    type: Schema.Types.ObjectId,
    ref: 'Role'
  }],
  employees : [{
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  }]
})


module.exports = model('Department', Department)
  
const { model, Schema } = require('mongoose')

const Employee = new Schema({
  fName : String,
  lName : String,
  role : {
    type: Schema.Types.ObjectId,
    ref: 'Role'
  },
  department : {
    type: Schema.Types.ObjectId,
    ref: 'Department'
  }
})


module.exports = model('Employee', Employee)
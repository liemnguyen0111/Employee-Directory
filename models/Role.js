  
const { model, Schema } = require('mongoose')

const Role = new Schema({
  title : String,
  salary : Number,
  department : {
    type: Schema.Types.ObjectId,
    ref: 'Department'
  },
  employees : [{
    type: Schema.Types.ObjectId,
    ref: 'Employee'
  }]
})


module.exports = model('Role', Role)
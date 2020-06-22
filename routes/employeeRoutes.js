const router = require('express').Router()
const { Employee, Role , Department } = require('../models')

router.get('/employees', (req, res) => {
    Employee.find({})
    .populate(['role', 'department'])
    .then(employees => {
      res.json(employees);
    })
    .catch(err => {
      res.status(404).json(err);
    });
})

router.post('/employees', (req, res) => {
     Employee.create(req.body)
    .then( employee => {
        Role.findByIdAndUpdate(req.body.role, { $push: { employees : employee._id }})
        .then(() => {})
        Department.findByIdAndUpdate(req.body.department, { $push: { employees : employee._id }})
        .then(() => {})
    }
    )
    .then(() => res.sendStatus(200))
    .catch(err => console.error(err))
})

router.post('/employees/bulk', async (req, res) => {
    await Employee.insertMany(req.body, {ordered : false})
    .then(employees => {
      res.json(employees);
    })
    .catch(err => {
      res.status(404).json(err);
    });
})


router.delete('/employees', (req, res) => {
  
})

module.exports = router
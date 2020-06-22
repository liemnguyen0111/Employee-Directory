const router = require('express').Router()
const { Department } = require('../models')

router.get('/departments', (req, res) => {
    Department.find({})
    .populate({ path : 'employees', populate : { path : 'role', model : 'Role'}})
    .then(departments => {
      res.json(departments);
    })
    .catch(() => {
     res.sendStatus(404);
    });
})

router.get('/departments/:id', (req, res) => {
  Department.findById(req.params.id)
    .populate('roles')
    .then(user => res.json(user))
    .catch(err => console.error(err))
})

router.post('/departments', (req, res) => {
    Department.create(req.body)
    .then(department => res.json(department))
    .catch(err => console.error(err))
})

router.post('/departments/bulk', async (req, res) => {
    await Department.insertMany(req.body, {ordered : false})
    .then(departments => {
      res.json(departments);
    })
    .catch(err => {
      res.status(404).json(err);
    });
})


router.delete('/departments', (req, res) => {
  
})

module.exports = router
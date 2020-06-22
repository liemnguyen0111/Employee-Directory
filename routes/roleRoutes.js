const router = require('express').Router()
const { Role , Department} = require('../models')

router.get('/roles', (req, res) => {
    Role.find({})
    .then(roles => {
      res.json(roles);
    })
    .catch(err => {
      res.status(404).json(err);
    });
})

router.post('/roles', (req, res) => {
    console.log(req.body)
    Role.create(req.body)
    .then( role => Department.findByIdAndUpdate(req.body.department, { $push: { roles : role._id } }))
    .then(role => res.json(role))
    .catch(err => console.error(err))
})

router.post('/roles/bulk', async (req, res) => {
    await Role.insertMany(req.body, {ordered : false})
    .then(roles => {
      res.json(roles);
    })
    .catch(err => {
      res.status(404).json(err);
    });
})


router.delete('/roles', (req, res) => {
  
})

module.exports = router
const express = require('express')
const router = express.Router()
const Vinyl = require('./../Vinyl')

//POST REQUEST - CREATE
router.post('/', (req, res) => {
    Vinyl.create(req.body)
    //res has a status of 201 (created) and return as json
        .then(vinyl => res.status(201).json({ status: 201, vinyl: vinyl}))
})

//GET REQUEST - INDEX
router.get('/', (req, res) => {
    Vinyl.find()
        .then(vinyls => res.json({status: 200, vinyls: vinyls}))
})

//DELETE /:id
//delete the vinyl and return 204 no content
router.delete('/:id', (req, res) => {
    console.log(req.params)
    Vinyl.deleteOne({ _id: req.params.id })
    .then(() => res.status(204).json())
})

// UPDATE 
// PUT /:id
// update the vinyl and return 200 ok and json of the updated vinyl
router.put('/:id', (req, res) => {
    Vinyl.findOneAndUpdate({ _id: req.params.id}, req.body,  {new: true})
        .then(vinyl => res.status(200).json({status: 200, vinyl: vinyl}))
})


module.exports = router
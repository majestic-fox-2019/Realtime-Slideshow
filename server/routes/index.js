const router = require('express').Router()

const { Slide } = require('../models')

router.get('/', (req, res) => {
    Slide
        .findAll()
        .then(slides => {
            res.status(200).json(slides)
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

module.exports = router
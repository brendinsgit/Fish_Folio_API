// import dependencies
const express = require('express')
const passport = require('passport')

// pull in Mongoose model for fish
const Fish = require('../models/fish')

const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

//////////////////////////////////////////////////
// routes go here

// Create Equipment
// POST -> Create equipment and give that equipment to a fish
// POST /equipment/:fishId

router.post('/equipment/:fishId', removeBlanks, (req, res, next) => {
    // save the equipment from req.body to a variable
    const equipment = req.body.equipment
    // isolate the fish id for ease of use
    const fishId = req.params.fishId
    // find the fish
    Fish.findById(fishId)
        // make sure I have a fish
        .then(handle404)
        // push the new equipment into the fish's array
        // save the fish
        .then(fish => {
            fish.equipment.push(equipment)
            
            return fish.save()
        })
        // send info after the fish has been updated
        // .json({ nameOfObject: value })
        .then(fish => res.status(201).json({ fish: fish }))
        // handle any errors
        .catch(next)
})

// ONLY the owner of a fish can update or delete equipment
// PATCH -> Update Equipment
// PATCH /equipment/:fishId/:equipmentId
router.patch('/equipment/:fishId/:equipmentId', requireToken, removeBlanks, (req, res, next) => {
    // save both ids to variable to easily use later
    const fishId = req.params.fishId
    const equipmentId = req.params.equipmentId

    // find fish
    Fish.findById(fishId)
        .then(handle404)
        .then(fish => {
            // single out the equipment
            const theEquipment = fish.equipment.id(equipmentId)
            // make sure the user is the fish's owner
            requireOwnership(req, fish)
            // update the toy with req.body.equipment
            theEquipment.set(req.body.equipment)

            // return the saved fish
            return fish.save()
        })
        // send a status
        .then(() => res.sendStatus(204))
        .catch(next)
})

// Delete a Equipment

// ONLY the owner of a fish can update or delete a fish equipment
// DELETE -> delete a Equipment
// DELETE /equipment/:fishId/:equipmentId
router.delete('/equipment/:fishId/:equipmentId', requireToken, removeBlanks, (req, res, next) => {
    // save both ids to variable to easily use later
    const fishId = req.params.fishId
    const equipmentId = req.params.equipmentId

    // find our fish
    Fish.findById(fishId)
        .then(handle404)
        .then(fish => {
            // single out the equipment
            const theEquipment = fish.equipment.id(equipmentId)
            // make sure the user is the fish's owner
            requireOwnership(req, fish)
            // delete the equipment from the fish
            theEquipment.deleteOne()

            // return the saved fish
            return fish.save()
        })
        // send a status
        .then(() => res.sendStatus(204))
        .catch(next)
})


// End of routes
//////////////////////////////////////////////////

// export router
module.exports = router
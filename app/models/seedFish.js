// seedFish.js will run with the command `npm run seed`

// this will seed the db with a buncha fish

const mongoose = require('mongoose')
const Fish = require('./fish')
const db = require("../../config/db")

const startFish = [
    { species: 'white fish', size: '18 inches', weight: '4lbs'},
    { species: 'blue fish', size: '18 inches', weight: '4lbs'},
    { species: 'red fish', size: '18 inches', weight: '4lbs'},
    { species: 'orange fish', size: '18 inches', weight: '4lbs'}
]

// first connect to db
// then remove all fish without owners 
// then insert the startFish 
// then always close the connection from this file

mongoose.connect(db, {
    useNewUrlParser: true
})
    .then(() => {
        Fish.deleteMany({ owner: null })
        .then(deletedFish => {
            console.log('the deleted fish: \n', deletedFish)

            Fish.create(startFish)
                .then(newFish => {
                    console.log('new fish added to db: \n', newFish)
                    mongoose.connection.close()
                })
                .catch(error => {
                    console.log('an error occurred: /n', error)
                    mongoose.connection.close()
                })
        })
        .catch(error => {
            console.log('an error occurred: /n', error)
            mongoose.connection.close()
        })
    })
    .catch(error => {
        console.log('an error occurred: \n', error)
        mongoose.connection.close()
    })
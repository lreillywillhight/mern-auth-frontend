let express = require('express')
let db = require('./models')
let app = express()



// home
app.get('/', (req, res) => {
    res.send('to the home!')
})

// /users - get indexes all users
app.get('/users', (req, res) => {
    db.user.findAll().then(users => {
        res.send(users)
    }).catch(err => {
        console.log('🍪')
        console.log(err)
    })
})

// /users/:id - get details of user
app.get('/users/:id', (req, res) => {
    db.user.findByPk(req.params.id).then(user => {
        res.send(user)
    }).catch(err => {
        console.log('🍥')
        console.log(err)
    })
})



app.listen(3000, () => console.log('app.js loaded'))


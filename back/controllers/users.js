const Users = require('../models/users')

module.exports = app => {
    app.get('/users', (req, res) => {
        Users.index(res)
    })

    app.get('/users/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Users.show(id, res)
    })

    app.post('/users', (req, res) => {
        const user = req.body
        Users.store(user, res)
    })

    app.put('/users/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const user = req.body
        Users.update(id, user, res)
    })

    app.delete('/users/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Users.destroy(id, res)
    })
}
const Users = require('../models/users')

module.exports = app => {
    app.get('/users', (req, res) => {
        Users.index()
            .then(results => res.status(200).json(results))
            .catch(errors => res.status(400).json(errors))
    })

    app.get('/users/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Users.show(id)
            .then(response => res.status(200).json(response))
            .catch(errors => res.status(400).json(errors))
    })

    app.post('/users', (req, res) => {
        const user = req.body
        Users.store(user)
            .then(response => res.status(201).json(response))
            .catch(errors => res.status(400).json(errors))
    })

    app.put('/users/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const user = req.body
        Users.update(id, user)
            .then(response => res.status(200).json(response))
            .catch(errors => res.status(400).json(errors))
    })

    app.delete('/users/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Users.destroy(id)
            .then(response => res.status(200).json(response))
            .catch(errors => res.status(400).json(errors))
    })

    app.get('/users/:id/posts', (req, res) => {
        const id = parseInt(req.params.id)
        Users.posts(id)
            .then(response => res.status(200).json(response))
            .catch(errors => res.status(400).json(errors))
    })
}
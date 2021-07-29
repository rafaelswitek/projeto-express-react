const Posts = require('../models/posts')

module.exports = app => {
    app.get('/posts', (req, res) => {
        Posts.index()
            .then(results => res.status(200).json(results))
            .catch(errors => res.status(400).json(errors))
    })

    app.get('/posts/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Posts.show(id)
            .then(response => res.status(200).json(response))
            .catch(errors => res.status(400).json(errors))
    })

    app.post('/posts', (req, res) => {
        const user = req.body
        Posts.store(user)
            .then(response => res.status(201).json(response))
            .catch(errors => res.status(400).json(errors))
    })

    app.put('/posts/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const user = req.body
        Posts.update(id, user)
            .then(response => res.status(200).json(response))
            .catch(errors => res.status(400).json(errors))
    })

    app.delete('/posts/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Posts.destroy(id)
            .then(response => res.status(200).json(response))
            .catch(errors => res.status(400).json(errors))
    })
}
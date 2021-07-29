const Users = require('../models/users')
const Posts = require('../models/posts')
const Synchronize = require('../service/synchronize')

module.exports = app => {
    app.get('/synchronize/users', (req, res) => {
        Synchronize.getUsers()
            .then(() => {
                Users.index()
                    .then(results => res.status(200).json(results))
                    .catch(errors => res.status(400).json(errors))
            })

    })

    app.get('/synchronize/posts', (req, res) => {
        Synchronize.getPosts()
            .then(() => {
                Posts.index()
                    .then(results => res.status(200).json(results))
                    .catch(errors => res.status(400).json(errors))
            })
    })
}
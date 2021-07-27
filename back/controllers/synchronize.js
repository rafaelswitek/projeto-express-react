const Synchronize = require('../models/synchronize')

module.exports = app => {

    app.get('/synchronize/users', (req, res) => {
        Synchronize.users(res)
    })
}
const moment = require('moment')
const repository = require('../repository/user')

class Users {
    constructor() {
        this.datetime = moment().format('YYYY-MM-DD HH:MM:SS')
    }

    store(user) {
        const createdAt = this.datetime
        const updatedAt = this.datetime

        return repository.create({ ...user, createdAt, updatedAt })
            .then(result => user)
    }

    index() {
        return repository.findAll()
    }

    show(id) {
        return repository.findById(id)
    }

    update(id, user) {
        const updatedAt = this.datetime
        const data = { ...user, updatedAt }

        if (data.id) {
            delete data.id;
        }
        return repository.save(id, data)
            .then(result => data)
    }

    destroy(id,) {
        return repository.delete(id)
            .then(result => id)
    }
}

module.exports = new Users
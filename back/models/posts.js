const moment = require('moment')
const repository = require('../repository/post')

class Posts {
    constructor() {
        this.datetime = moment().format('YYYY-MM-DD HH:mm:ss')
    }

    store(post) {
        const createdAt = this.datetime
        const updatedAt = this.datetime

        return repository.create({ ...post, createdAt, updatedAt })
            .then(result => post)
    }

    index() {
        return repository.findAll()
    }

    show(id) {
        return repository.findById(id)
    }

    update(id, post) {
        const updatedAt = this.datetime
        const data = { ...post, updatedAt }

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

module.exports = new Posts
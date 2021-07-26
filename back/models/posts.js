const moment = require('moment')
const connection = require('../infra/connection')

class Posts {
    create(post, res) {
        const createdAt = moment().format('YYYY-MM-DD HH:MM:SS')
        const updatedAt = createdAt
        const sql = 'INSERT INTO posts SET ?'

        connection.query(sql, { ...post, createdAt, updatedAt }, (error, results) => {
            if (error) {
                res.status(400).json(error)
            }
            res.status(201).json(results)
        })
    }
}

module.exports = new Posts
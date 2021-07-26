const moment = require('moment')
const connection = require('../infra/connection')

class Users {
    store(user, res) {
        const createdAt = moment().format('YYYY-MM-DD HH:MM:SS')
        const updatedAt = createdAt
        const data = { ...user, createdAt, updatedAt }
        const sql = 'INSERT INTO users SET ?'

        connection.query(sql, data, (error, results) => {
            if (error) {
                res.status(400).json(error)
            }
            res.status(201).json(data)
        })
    }

    index(res) {
        const sql = 'SELECT * FROM users'

        connection.query(sql, (error, results) => {
            if (error) {
                res.status(400).json(error)
            }
            res.status(200).json(results)
        })
    }

    show(id, res) {
        const sql = `SELECT * FROM users WHERE id = ${id}`

        connection.query(sql, (error, results) => {
            if (error) {
                res.status(400).json(error)
            }
            res.status(200).json(results[0])
        })
    }

    update(id, user, res) {
        const updatedAt = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = { ...user, updatedAt }
        const sql = 'UPDATE users SET ? WHERE id = ?'

        if (data.id) {
            delete data.id;
        }

        connection.query(sql, [data, id], (error, results) => {
            if (error) {
                res.status(400).json(error)
            }
            res.status(200).json({ ...data, id })
        })
    }

    destroy(id, res) {
        const sql = 'DELETE FROM users WHERE id = ?'

        connection.query(sql, id, (error, results) => {
            if (error) {
                res.status(400).json(error)
            }
            res.status(204).json()
        })
    }
}

module.exports = new Users
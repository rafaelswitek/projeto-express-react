const query = require('../infra/queries')

class User {
    create(data) {
        const sql = 'INSERT INTO users SET ?'
        return query(sql, data)
    }

    findAll() {
        const sql = 'SELECT * FROM users'
        return query(sql)
    }

    findById(id) {
        const sql = 'SELECT * FROM users WHERE id = ?'
        return query(sql, id)
    }

    save(id, data) {
        const sql = 'UPDATE users SET ? WHERE id = ?'
        return query(sql, [data, id])
    }

    delete(id) {
        const sql = 'DELETE FROM users WHERE id = ?'
        return query(sql, id)
    }
}

module.exports = new User
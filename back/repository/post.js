const query = require('../infra/queries')

class Post {
    constructor() {
        this.table = 'posts'
    }

    create(data) {
        console.log(data)
        const sql = `INSERT INTO ${this.table} SET ?`
        return query(sql, data)
    }

    findAll() {
        const sql = `SELECT * FROM ${this.table}`
        return query(sql)
    }

    findById(id) {
        const sql = `SELECT * FROM ${this.table} WHERE id = ?`
        return query(sql, id)
    }

    save(id, data) {
        const sql = `UPDATE ${this.table} SET ? WHERE id = ?`
        return query(sql, [data, id])
    }

    delete(id) {
        const sql = `DELETE FROM ${this.table} WHERE id = ?`
        return query(sql, id)
    }

}

module.exports = new Post
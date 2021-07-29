const query = require('../infra/queries')
const Base = require("./base")

const table = 'posts'

class Post extends Base {
    constructor() {
        super(table)
    }

    getByUser(id) {
        const sql = `SELECT * FROM ${table} WHERE userId = ?`
        return query(sql, id)
    }
}

module.exports = new Post
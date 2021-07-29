const Base = require("./base")

const table = 'users'

class User extends Base {
    constructor() {
        super(table)
    }
}

module.exports = new User
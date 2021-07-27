const axios = require('axios')

class Synchronize {
    async users(res) {
        const users = await axios.get('https://jsonplaceholder.typicode.com/users')
        if (users.data.length == 0) {
            res.status(404).json()
        }
        res.status(200).json(users.data)
    }
}

module.exports = new Synchronize
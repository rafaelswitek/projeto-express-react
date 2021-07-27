const connection = require('./connection')

const executeQuery = (query, params = '') => {
    return new Promise((resolve, reject) => {
        connection.query(query, params, (errors, results, fields) => {
            if (errors) {
                reject(errors)
            }
            resolve(results)
        })
    })
}

module.exports = executeQuery
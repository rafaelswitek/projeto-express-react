class Tables {
    init(connection) {
        this.connection = connection
        this.createUsers()
        this.createPosts()
    }

    createUsers() {
        const sql = 'CREATE TABLE IF NOT EXISTS users (id int NOT NULL, name varchar(50) NOT NULL, company varchar(50) NOT NULL, createdAt datetime NOT NULL, updatedAt datetime NOT NULL, PRIMARY KEY(id))'

        this.connection.query(sql, (error) => {
            if (error) {
                throw new Error(error)
            }
        })
    }

    createPosts() {
        const sql = 'CREATE TABLE IF NOT EXISTS posts (id int NOT NULL, userId int, title varchar(250) NOT NULL, body text NOT NULL, createdAt datetime NOT NULL, updatedAt datetime NOT NULL, PRIMARY KEY(id))'

        this.connection.query(sql, (error) => {
            if (error) {
                throw new Error(error)
            }
        })
    }
}

module.exports = new Tables
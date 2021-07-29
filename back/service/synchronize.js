const axios = require('axios');
const Posts = require('../models/posts');
const Users = require('../models/users');

const url = 'https://jsonplaceholder.typicode.com'

class Synchronize {
    getUsers() {
        return axios.get(`${url}/users`)
            .then(response => {
                response.data.forEach(element => {
                    const user = {
                        id: element.id,
                        name: element.name,
                        company: element.company.name,
                    };
                    Users.store(user)
                });
            })
            .catch(error => { throw new Error(error) })
    }

    getPosts() {
        return axios.get(`${url}/posts`)
            .then(response => {
                response.data.forEach(element => {
                    const post = {
                        id: element.id,
                        userId: element.userId,
                        title: element.title,
                        body: element.body,
                    };
                    Posts.store(post)
                });
            })
            .catch(error => { throw new Error(error) })
    }
}

module.exports = new Synchronize
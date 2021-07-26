module.exports = app => {
    app.get('/posts', (req, res) => {
        res.send('Posts...')
    })
}
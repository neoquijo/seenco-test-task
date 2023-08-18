const express = require('express')
const app = express()




app
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Authorization, Content-Type, Accept');
        next();
    })
    .use(express.urlencoded({ extended: true }))
    .use(express.json())

app.post('/login', (req, res) => {
    console.log(req.body)
    if (req.body?.username == 'guest' && req.body.password == 'guest')
        res.json({
            token: 'testtoken'
        })
    else res.status(401).json('Unauthorized')
})

app.get('/verify', (req, res) => {
    if (req.headers.authorization == 'testtoken')
        res.status(200).json({
            id: 'sommeID',
            createdAt: new Date(),
            login: 'guest'
        })
    else res.status(401).json({ message: 'Unauthorized' })
})


app.listen(3001, () => console.log('API started'))


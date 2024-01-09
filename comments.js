// Create a web server

// 1. Import the express library
const express = require('express');

// 2. Create an instance of an express app
const app = express();

// 3. Create a route handler
app.get('/comments', (req, res) => {
    res.send([
        {
            id: 1,
            username: 'tickle122',
            comment: 'I love cheese'
        },
        {
            id: 2,
            username: 'grumpy19',
            comment: 'I hate everything'
        },
        {
            id: 3,
            username: 'happyamy2016',
            comment: 'I love everything'
        },
        {
            id: 4,
            username: 'cooljmessy',
            comment: 'Javascript rocks!'
        },
        {
            id: 5,
            username: 'weegembump',
            comment: 'I love lamp'
        }
    ])
});

// 4. Have the app listen on a port
app.listen(9090, () => {
    console.log('Server started on port 9090');
});
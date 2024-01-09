// Create a web server 
// Run server on port 3000
// Use express and body-parser
// Use the comments array
// Use GET, POST, PUT, DELETE

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const comments = [
    {id: 1, comment: "This is a comment"},
    {id: 2, comment: "This is another comment"},
    {id: 3, comment: "This is yet another comment"}
];

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.get('/comments', function(req, res){
    res.send(comments);
});

app.get('/comments/:id', function(req, res){
    const comment = comments.find(function(comment){
        return comment.id === parseInt(req.params.id);
    });
    if(!comment) res.status(404).send('The comment with the given ID was not found');
    res.send(comment);
});

app.post('/comments', function(req, res){
    const comment = {
        id: comments.length + 1,
        comment: req.body.comment
    };
    comments.push(comment);
    res.send(comment);
});

app.put('/comments/:id', function(req, res){
    const comment = comments.find(function(comment){
        return comment.id === parseInt(req.params.id);
    });
    if(!comment) res.status(404).send('The comment with the given ID was not found');

    comment.comment = req.body.comment;
    res.send(comment);
});

app.delete('/comments/:id', function(req, res){
    const comment = comments.find(function(comment){
        return comment.id === parseInt(req.params.id);
    });
    if(!comment) res.status(404).send('The comment with the given ID was not found');

    const index = comments.indexOf(comment);
    comments.splice(index, 1);

    res.send(comment);
});

app.listen(3000, function(){
    console.log('Listening on port 3000...');
});

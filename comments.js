// Create a web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { randomBytes } = require('crypto');

// Create an express app
const app = express();

// Add middleware to parse the body of the request
app.use(bodyParser.json());
app.use(cors());

// Create an object to store comments
const commentsByPostId = {};

// Create an endpoint to get comments by post id
app.get('/posts/:id/comments', (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

// Create an endpoint to create comments
app.post('/posts/:id/comments', (req, res) => {
  // Generate a random id
  const commentId = randomBytes(4).toString('hex');

  // Get the content of the comment
  const { content } = req.body;

  // Get the comments of the post id
  const comments = commentsByPostId[req.params.id] || [];

  // Add the comment to the comments array
  comments.push({ id: commentId, content });

  // Update the comments of the post id
  commentsByPostId[req.params.id] = comments;

  // Return the comments
  res.status(201).send(comments);
});

// Listen on port 4001
app.listen(4001, () => {
  console.log('Listening on 4001');
});
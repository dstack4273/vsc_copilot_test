// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./queries');

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

// GET request for all comments
app.get('/comments', db.getComments);

// GET request for a single comment
app.get('/comments/:id', db.getCommentById);

// POST request for a single comment
app.post('/comments', db.createComment);

// PUT request for a single comment
app.put('/comments/:id', db.updateComment);

// DELETE request for a single comment
app.delete('/comments/:id', db.deleteComment);

// GET request for all comments for a single post
app.get('/comments/post/:id', db.getCommentsByPost);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
});
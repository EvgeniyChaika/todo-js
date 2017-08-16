'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const state = require('./api/state.json');

const app = express();

let nextId = 4;

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((request, response, next) => {
    response.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/tasks', (request, response) => {
    response.send(state.tasks);
});

app.post('/api/tasks', (request, response) => {
    const task = {
        id: nextId++,
        title: request.body.title,
        completed: false
    };

    state.tasks.push(task);
    response.send(task);
});

app.put('/api/tasks/:id', (req, res) => {
    const task = state.tasks.find(task => task.id === parseInt(req.params.id));

    if (!task) {
        return res.sendStatus(404);
    }

    task.title = req.body.title || task.title;

    res.json(task);
});

app.patch('/api/tasks/:id', (req, res) => {
    const task = state.tasks.find(task => task.id === parseInt(req.params.id));

    if (!task) {
        return res.sendStatus(404);
    }

    task.completed = !task.completed;

    res.json(task);
});

app.delete('/api/tasks/:id', (req, res) => {
    const index = state.tasks.findIndex(task => task.id === parseInt(req.params.id));

    if (index === -1) {
        return res.sendStatus(404);
    }

    state.tasks.splice(index, 1);

    res.sendStatus(204);
});

app.get('*', (req, res) => {
    fs.readFile(`${__dirname}/public/index.html`, (error, html) => {
        if (error) {
            throw error;
        }

        res.setHeader('Content-Type', 'text/html');
        res.end(html);
    });
});

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));
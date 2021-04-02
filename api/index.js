const app = require('express')();
const path = require('path');
const { apiTokens } = require('../config');

app.get('/', (req, res) => {
    return res.status(403).sendFile(path.join(__dirname, '../assets/images/403.jpg'));
});

app.get('/qna/list', (req, res) =>{
    const token = req.query.token;
    if (!apiTokens.includes(token)) {
        return res.status(403).sendFile(path.join(__dirname, '../assets/images/403.jpg'));
    } else {
        return res.send('you have been authorized!');
    };
});

module.exports = app;
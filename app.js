const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT = 3000;
const api = require('./routes/api');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api', api);

app.get('/', (req, res) => {
    res.sendFile('index.html');
})

// Error Handler
function errorHandler(err, req, res, next) {
    res.send(err.message);
}

app.use(errorHandler);
console.log('listening on port', PORT);
app.listen(PORT);
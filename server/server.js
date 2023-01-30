const express = require('express')

const app = express();
const port = 4000;

app.listen(port);

console.warn('BrainPod server started on port ', port);


app.get('/hello', require('./api/login/get'));
const express = require('express')
const cors = require('cors');

const app = express();
const port = 4000;

app.use(express.json());
app.listen(port);
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET','POST']
}));


console.warn('BrainPod server started on port ', port);


app.post('/hello', require('./api/Login/post'));
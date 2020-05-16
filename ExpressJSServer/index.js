#!/usr/bin/env node


const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port); // Change to http port 80 when ready for the real deal.


// const http = require('http');

// const hostname = 'yeetus';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// server.listen(port, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

//TEST 123

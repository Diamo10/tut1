const http = require('http');
const express = require('express');
console.log('Hello world');
console.log('Happy happy');
console('i added');


const server = http.createServer((req, res)=>{
    res.write('This is my first node js program');
})

server.listen(3004);


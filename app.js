const express = require('express');
const app = express()
const morgan = require('morgan')
const http = require('http')



console.log(morgan('dev'))






const server = http.createServer((req,res)=>{
    res.end('Welcome to our simple crud project server')
})


server.listen(9000, '127.0.0.1', ()=>{
    console.log('Listening on port 9000')
})

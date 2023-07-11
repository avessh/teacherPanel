const express = require('express')
const bodyParser = require('body-parser')

const app = express()
var jsonParser = bodyParser.json()

   const result =  app.post('/',jsonParser , (req,res) => {
        console.log("create class route");
        res.status(200).send({"msg":"hello success"})
    })


module.exports = app
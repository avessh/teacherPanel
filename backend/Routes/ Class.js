const express = require('express')
const bodyParser = require('body-parser')
const classModel = require('../Models/ClassModel')

const app = express()
var jsonParser = bodyParser.json()

   const result =  app.post('/', jsonParser , async(req,res) => {
        // console.log("create class route");
        // console.log('classmodel' , classModel);

        try {
            const classes = new classModel({
                batch:req.body.batchname,
                classStartHour:req.body.classStartHour,
                ClassStartMin:req.body.classStartMin,
                classEndHour:req.body.classEndHourTime,
                classEndMin:req.body.classEndMinTime,
                ClassFrequency:req.body.classfreq
            })

            const inserted = await classes.save()
            console.log('data from frontend' , req.body);
                res.status(200).send({"msg":"hello success"})
                console.log("class data inserted");
            

        } catch (error) {
            res.status(500).send({"error":"error accured while interting class data"})
            console.log("error while inserting class data" , error);
        }

        
    })


module.exports = app
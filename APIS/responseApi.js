const exp=require('express');
const responseApp=exp.Router()

const expressAsyncHandler=require('express-async-handler')
//import bcryptjs for hashing password
const bcryptjs=require("bcryptjs")

//import jsonwebtoken for creating token
const jwt=require("jsonwebtoken")

require("dotenv").config()

// to extract body of request object
responseApp.use(exp.json())


responseApp.post("/create-responses", expressAsyncHandler(async (request, response) => {
    let responsesCollectionObject = request.app.get("responsesCollectionObject");
    let newResponsesObj = request.body;
    await responsesCollectionObject.insertOne(newResponsesObj);
    response.send({ message: "New form entry created" });
    })
);
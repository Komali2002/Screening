//create express app
const exp = require("express");
const app = exp();
const mclient=require("mongodb").MongoClient;

//DB connection URL
const DBurl="mongodb+srv://komali:komali2002@shopping.o29ko.mongodb.net/?retryWrites=true&w=majority"

//connect with mongoDB server
mclient.connect(DBurl)
.then((client)=>{

  //get DB object
  let dbObj=client.db("shoppingdb");

  //create collection objects
 
  let userCollectionObject=dbObj.collection("usercollection");
  let responseCollectionObject=dbObj.collection("responsecollection");

  //sharing collection objects to APIs
  app.set("userCollectionObject",userCollectionObject);
 app.set("responseCollectionObject",responseCollectionObject)
 
  


  console.log("DB connection success")
})
.catch(err=>console.log('Error in DB connection ',err))


//import userApp and productApp
const userApp = require("./APIS/userApi");
const responseApp=require("./APIS/responseApi");
//excute specific middleware based on path
app.use("/user-api", userApp);
app.use("/response-api", responseApp);

//handling invalid paths
app.use((request, response, next) => {
  response.send({ message: `path ${request.url} is invalid` });
});

//error handling middleware
app.use((error, request, response, next) => {
  response.send({ message: "Error occurred", reason: `${error.message}` });
});

//assign port number
app.listen(5000, () => console.log("server listening on port 5000.."));
const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());



app.get('/',(req,res)=>{
    res.send('coffee making server is running')
});
// selinakhatun982520
// TahWlyrb3lbaG0NJ



// coffeeMaster
// vN6LGnnioSYn9dZ4

// console.log(process.env.BD_USER);
// console.log(process.env.BD_PASS);


const uri = `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASS}@cluster0.ihxtrhm.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




app.listen(port,()=>{
    console.log(`coffee server is running on port:${port}`)
});
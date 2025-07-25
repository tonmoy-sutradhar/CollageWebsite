require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 7000;
var jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

// Middleware
const corsOptions = {
  origin: ["http://localhost:3000"],
  credentials: true,
  optionalSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// <--------------------------------------------MongoDB Connect ----------------------------------------------------->

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@cluster0.cjt8m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const quiresCollection = client
      .db("Recommendation-queries")
      .collection("queries");
    const recommendedCollection = client
      .db("Recommendation-queries")
      .collection("recommended");

    app.post("/collage", async (req, res) => {
      const quires = req.body;
      const result = await quiresCollection.insertOne(quires);
      res.send(result);
    });

    app.get("/collage-Admission", async (req, res) => {
      const search = req.query.search || "";
      let query = {
        productName: {
          $regex: search,
          $options: "i",
        },
      };
      const result = await quiresCollection.find(query).toArray();
      res.send(result);
    });

    app.get("/collage/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await quiresCollection.findOne(query);
      res.send(result);
    });

    app.put("/collage/:id", async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const update = req.body;
      const quiresUpdate = {
        $set: {
          productName: update.productName,
          productBrand: update.productBrand,
          productImgUrl: update.productImgUrl,
          queryTitle: update.queryTitle,
          boycottReason: update.boycottReason,
        },
      };
      const result = await quiresCollection.updateOne(
        filter,
        quiresUpdate,
        options
      );
      res.send(result);
    });

    app.get("/all-collage/:email", async (req, res) => {
      const email = req.params.email;
      if (!email) {
        return res.status(400).send({ error: "Email is required" });
      }
      const query = { email };
      const result = await recommendedCollection.find(query).toArray();
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

// <-----------------------------------------MongoDB------------------------------------------------------->

// Port run ---->>
app.get("/", async (req, res) => {
  res.send("Product Recommendation System Server Running.");
});

app.listen(port, () => {
  console.log("port is running on port", port);
});

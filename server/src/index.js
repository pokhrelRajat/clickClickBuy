const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 4000;
app.use(express.json());

//------------------------- CREATING DATABASE CONNECTION -------------------------
const connectToDb = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/clickClickBuyDB"
    );
    if (connection) {
      console.log("connnectd to mongodb");
    }
  } catch (err) {
    console.log(err);
  }
};
connectToDb();

//------------------------- CREATING SCHEMAS FOR DIFFERENT COLLECTIONS -------------------------
const userSchema = new mongoose.Schema({
  fullName: String,
  mobileNumber: Number,
  password: String,
  role: String,
});

//------------------------- CREATING MODELS FOR DIFFERENT SCHEMAS -------------------------
const Users = mongoose.model("Users", userSchema);

//------------------------- REGISTERING A NEW USER(C) -------------------------
app.post("/register", async (req, res) => {
  const data = await Users.create(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

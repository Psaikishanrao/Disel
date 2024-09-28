const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors({
  origin: [
    "https://disel-git-main-psaikishanraos-projects.vercel.app",
    "https://disel-ebon.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: false, 
}));


app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
 
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const productSchema = new mongoose.Schema({
  type: String,
  icon: String,
  details: String,
  disc: Number,
  mrp: Number,
  off: String,
  catg: String,
  color: String,
});

const Product = mongoose.model("Product", productSchema);

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  id: Number,
});

const User = mongoose.model("User", userSchema);

// Products API
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Users API
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

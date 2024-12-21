const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/Auth");
const userRoute = require("./routes/User");
const orderRoute = require("./routes/Order");
const cartRoute = require("./routes/Cart");
const productRoute = require("./routes/Product");
const reviewsRoute = require("./routes/Review");
const cors = require("cors");
const Product = require("./routes/models/Product.model");
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err);
  });


app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/orders", orderRoute);
app.use("/carts", cartRoute);
app.use("/products", productRoute);
app.use("/reviews", reviewsRoute);
app.get('/', async (req, res) => {
    try {

        res.status(200).json('Hello World!');

    } catch (error) {
        res.status(500).json({error: error.message});
    }
});
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Backend server is running! Connected to Port ${process.env.PORT || 5000}`);
  });

module.exports = app;


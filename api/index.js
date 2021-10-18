const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const ordersRoute = require("./routes/order");

dotenv.config();

//Data encapsulation.
mongoose.connect(process.env.MONGO_URL).then(

()=>console.log("DB COnnection Successful")
).catch((err)=>{
    console.log("This is error");
});
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", ordersRoute);


app.listen(process.env.PORT||5000, ()=>{
    console.log("Backend is running");
})
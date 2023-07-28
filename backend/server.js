
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import  exerciseRouter from'./routes/exercise.js';
import userRouter from './routes/users.js';
const app= express()
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 5002;
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));



app.use('/exercise', exerciseRouter);
app.use('/users',userRouter);
// import authRoutes from './routes/auth.js';
// import adminRoutes from './routes/admin/auth.js';
// import categoryRouter from "./routes/category.js";
// import productRouter from "./routes/product.js";
// import cartRouter from "./routes/cart.js";





app.get('/',(req,res,next) => {
    res.status(200).json({
        message: "Hello"
    });
});
 




mongoose.connect(process.env.ATLAS_URI,{useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT,() => console.log(PORT)))
.catch((error) => console.log(error.message));

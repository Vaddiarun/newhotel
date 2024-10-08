import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import menuRoutes from './routes/menu.routes.js';
import CategoryRoutes from "./routes/category.routes.js";
import orderRoutes from "./routes/orders.routes.js"
import signInRoutes from "./routes/signin.routes.js"
import dashboardRoutes from "./routes/dashboard.routes.js"
import stockRoutes from "./routes/stock.routes.js"; 
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();

const app = express();


app.use(cors({
    origin: "*",
}))

app.use(express.json());

app.use(cookieParser())

const __dirname = path.resolve()

const PORT = process.env.PORT || 5000;

const connectDB = async () => {
    mongoose.connect(process.env.MONGO).then(() => {
        console.log("connected to db");
    })
}

connectDB();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
app.get("/",(req,res)=>{
    return res.send("hi");
})
app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use("/api/v1/menu", menuRoutes);
app.use("/api/v1/categories", CategoryRoutes);
app.use("/api/v1/orders", orderRoutes);
app.use("/api/v1/user", signInRoutes);
app.use("/api/v1/dashboard", dashboardRoutes);
app.use("/api/v1/stock", stockRoutes);


app.use(express.static(path.join(__dirname, "/hotel/dist")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,"hotel","dist","index.html"))
})

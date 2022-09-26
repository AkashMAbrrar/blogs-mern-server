import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors';
import router from './routes/user.route';
import blogRouter from './routes/blogs-routes';

const app = express();

// midle wares
app.use(express.json());
app.use(cors());
// Database Connection with mongodb by mongoose
mongoose.connect("mongodb://localhost:27017/blogs-services", (err) => {
    if (!err) console.log('db connected');
    else console.log('db error')
});

// routers
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

// root api
app.use("/", (req, res) => {
    res.send("hello from mars land");
});

//server
const port = process.env.PORT || 7000;
app.listen(port, () => {
    console.log("hello from server side");
});

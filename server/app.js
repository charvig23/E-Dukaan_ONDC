const express = require('express');
const app = express();
const User = require("../server/models/user.js");
const passport=require("passport");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const errorHandler = require("./middlewares/errorHandle.js");

if(process.env.NODE_ENV !== "production"){
    require("dotenv").config({path: "./.env"});
}


// using middlewares
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(errorHandler);

// app.use(upload.any());
app.use(passport.initialize());
app.use(cookieParser());

// import routes here
const authRoutes = require("./routes/auth.js");

//use routes here
app.use("/auth", authRoutes);

module.exports = app;

// setup for passport-jwt
// app.use(authMiddleware);


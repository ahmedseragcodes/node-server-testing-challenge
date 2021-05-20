const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const hobbitsRouter = require("./hobbitsRouter");
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/api/hobbits", hobbitsRouter);

//SANITY ENDPOINT 
server.get("/", (req, res, next)=>{
    res.status(200).json({message: "Success"});
})

module.exports = server; 
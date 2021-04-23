const express = require("express");
const Hobbits = require("./hobbitsModel");

const router = express.Router();

//ENDPOINTS

//[GET] ALL HOBBITS

router.get("/", (req, res, next)=>{

})

//[GET] BY ID
router.get("/:id", (req, res, next)=>{

})

//[POST] New Hobbit
router.post("/", (req, res, next)=>{

})

//[DELETE] Hobbit
router.delete("/:id", (req, res, next)=>{

    
})


module.exports = router;
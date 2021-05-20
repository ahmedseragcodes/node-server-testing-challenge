const express = require("express");
const Hobbits = require("./hobbitsModel");

const router = express.Router();

//ENDPOINTS

//[GET] ALL HOBBITS

router.get("/", (req, res, next)=>{
    Hobbits.getAllHobbits()
    .then((allHobbits)=>{
        console.log(allHobbits);
        res.status(200).json(allHobbits);
    })
    .catch((err)=>{
        res.status(500).json({message: "Failed to get hobbits"});
    })
})

//[GET] BY ID
router.get("/:id", (req, res, next)=>{

    const {id} = req.params;

    Hobbits.getHobbitById(id)
    .then((specificHobbit)=>{
        console.log(specificHobbit);
        res.status(200).json(specificHobbit);
    })
    .catch((err)=>{
        res.status(500).json({message: err.message});
    })

})

//[POST] New Hobbit
router.post("/", (req, res, next)=>{

    const newHobbit = req.body;

    if(!newHobbit.name){
        res.status(400).json({message: "Name is required"})
    } else {
        Hobbits.addNewHobbit(newHobbit)
        .then((newestHobbit)=>{
            console.log(newestHobbit);
            res.status(200).json(newestHobbit);
        })
        .catch((err)=>{
            res.status(500).json({message: err.message});
        })
    }

})

//[DELETE] Hobbit
router.delete("/:id", (req, res, next)=>{

    const { id } = req.params;

    Hobbits.deleteHobbit(id)
    .then((result)=>{
        console.log(result);
        res.status(200).json(result);
    })
    .catch((err)=>{
        res.status(500).json({message: err.message});
    })

})


module.exports = router;
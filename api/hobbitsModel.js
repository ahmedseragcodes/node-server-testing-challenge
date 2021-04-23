const db = require("../data/db-config");

function getAllHobbits(){
    return db("hobbits");
}



module.exports = {
    
}
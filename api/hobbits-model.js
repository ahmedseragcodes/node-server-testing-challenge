const db = require("../data/db-config");

function getAllHobbits(){
    return db("hobbits")
}

function getHobbitById(id){
    return db("hobbits")
            .where("id", id)
}

async function addNewHobbit(newHobbit){
    const newHobbitId = await db("hobbits")
                            .insert(newHobbit)

    return getHobbitById(newHobbitId);
}

function deleteHobbit(id){
    return db("hobbits")
            .where({id})
            .del()

}




module.exports = {
    getAllHobbits, getHobbitById, addNewHobbit, deleteHobbit
}
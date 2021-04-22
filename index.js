require("dotenv").config();
const server = require("./server");

const PORT = process.env.PORT || 1234;

server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})
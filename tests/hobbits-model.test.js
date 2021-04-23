const Hobbits = require("../api/hobbitsModel");
const db = require("../data/db-config");

const gimley = {name: "gimley"};
const ent = {name: "the ents"};

beforeAll(async()=>{
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async()=>{
    await db("hobbits").truncate()
})

afterAll(async()=>{
    await db.destroy();
})

it("correct env", ()=>{
    expect(process.env.DB_ENV).toBe("testing");
})

describe("Hobbits Model", ()=>{
    describe("post/insert function", ()=>{
        it("adds a hobbit to the db", async()=>{
            
            let allHobbits
            await db("hobbits").insert(gimley)
            allHobbits = await db("hobbits")
            expect(allHobbits).toHaveLength(1)

            await db("hobbits").insert(ent)
            allHobbits = await db("hobbits")
            expect(allHobbits).toHaveLength(2)
        })
    })
    describe("delete function", ()=>{
        it("deletes a hobbit from the db", async()=>{

            let allHobbits;
            await db("hobbits").del({id: 1})
            allHobbits = await db("hobbits")
            expect(allHobbits).toHaveLength(0);
        })
    })
})
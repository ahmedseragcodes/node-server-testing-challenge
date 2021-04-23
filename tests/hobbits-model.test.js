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
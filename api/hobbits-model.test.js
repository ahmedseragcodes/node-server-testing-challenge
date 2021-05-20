const db = require("../data/db-config");
const Hobbits = require("./hobbits-model");

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
  })
  beforeEach(async () => {
    await db('hobbits').truncate()
  })
  afterAll(async () => {
    await db.destroy()
  })

describe("Hobbits", ()=>{
    test("Hobbits is defined", ()=>{
        expect(Hobbits).toBeDefined()
    })
    test("Right Environment", ()=>{
        expect(process.env.DB_ENV).toBe("testing");
    })
    describe("GET", ()=>{
        it("resolves a list of hobbits", async()=>{

            let allHobbits = await Hobbits.getAllHobbits()
            expect(allHobbits).toEqual([])
            await db("hobbits").insert({name: "Gandalf"})
            allHobbits = await Hobbits.getAllHobbits()
            expect(allHobbits).toHaveLength(1)
        })
        it("returns one hobbit by id", async()=>{

            await db("hobbits").insert({name: "Gandalf"})
            let specificHobbit = await db("hobbits").where("id", 1)
            expect(specificHobbit).toMatchObject([{id: 1, name: "Gandalf"}]);
        })
    })
})
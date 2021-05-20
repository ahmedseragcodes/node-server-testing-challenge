const db = require("../data/db-config");
const request = require("supertest");
const hobbits = require("./hobbits-model");
const server = require("./server");

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

  describe("GET", ()=>{
      beforeEach(async()=>{
        await db("hobbits").insert({name: "Gandalf"})
      })
      it("returns a list of hobbits", async()=>{
          const res = await request(server).get("/api/hobbits")
          expect(res.body).toMatchObject([{id: 1, name: "Gandalf"}])
      })
  })
  describe("POST", ()=>{
      it("adds a hobbit", async()=>{

        const originalHobbits = await db("hobbits")
        expect(originalHobbits).toHaveLength(0)

        const hobbitToAdd = {name: "Aragorn"}

        await request(server).post("/api/hobbits").send(hobbitToAdd)

        const newHobbits = await db("hobbits")
        expect(newHobbits).toHaveLength(1)

      })
  })
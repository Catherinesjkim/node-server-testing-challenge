const supertest = require("supertest")
// our server won't actually start due to the if statement in index.js
const server = require("./index")

// similar to virtual axios
test("welcome route", async () => {
  const res = await supertest(server).get("/")
  expect(res.statusCode).toBe(200)
  expect(res.type).toBe("application/json")
  expect(res.body.message).toBe("Welcome to our API")
})


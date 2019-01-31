import request from "supertest"

import app from "../app.js"
import { destroyConnection } from "../db/database"

describe("Session tests", () => {
	let agent

	beforeEach(() => {
		agent = request.agent(app)
	})
	it("Should return a different result based on sessions", async done => {
		await agent.get("/session")
		const result = await agent.get("/session")
		expect(result.body.n).toBeGreaterThan(0)
		done()
	})

	it("Should trigger n times", async done => {
		const n = 4
		let result
		for (let i = 0; i <= n; i++) {
			result = await agent.get("/session")
		}
		console.log(result.body.n)
		expect(result.body.n).toEqual(n)

		done()
	})

	afterAll(async done => {
		await destroyConnection()
		done()
	})
})

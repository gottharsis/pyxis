// @flow
import request from "supertest"
import app from "../app"
import { destroyConnection } from "../db/database"

describe("Cart tests", () => {
	describe("basic tests", () => {
		it("should be ok", async done => {
			const response = await request(app).get("/cart")
			expect(response.ok).toBeTruthy()
			done()
		})

		it("should initially have empty cart", async done => {
			const response = await request(app).get("/cart")
			const emptyCart = { items: [], total: 0 }
			expect(response.body).toEqual(emptyCart)
			done()
		})
	})

	afterAll(async done => {
		await destroyConnection()
		done()
	})
})

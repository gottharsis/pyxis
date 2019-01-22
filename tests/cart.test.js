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

	describe("Add and Remove items", () => {
		let agent
		beforeEach(async done => {
			agent = request.agent(app)
			await agent.get("/cart")
			await agent.get("/cart/add/1/2")
			done()
		})

		it("should add multiple items to cart", async done => {
			const res = await agent.get("/cart/add/2/2")
			const expectedCart = {
				items: [
					{ product: { id: 1 }, qty: 2 },
					{ product: { id: 2 }, qty: 2 }
				],
				total: expect.any(Number)
			}
			expect(res.body).toMatchObject(expectedCart)
			done()
		})

		it("should remove item from cart", async done => {
			const res = await agent.get("/cart/remove/1")
			const expectedCart = {
				items: [],
				total: 0
			}
			expect(res.body).toMatchObject(expectedCart)
			done()
		})
	})
	describe("Update Cart", () => {
		let agent
		beforeEach(async done => {
			//const baseCart = [{ id: 1, qty: 2 }, { id: 2, qty: 3 }]
			agent = request.agent(app)
			await agent.get("/cart")
			await agent.get("/cart/add/1/2")
			done()
		})

		it("should change the quantity of an item already in the cart", async done => {
			const response = await agent
				.post("/cart/update")
				.send({ updates: [{ id: 1, qty: 4 }] })
			const expectedCart = {
				items: [{ product: { id: 1 }, qty: 4 }]
			}
			expect(response.body.data).toMatchObject(expectedCart)
			done()
		})
		it("should add an item that is not in the cart", async done => {
			const response = await agent
				.post("/cart/update")
				.send({ updates: [{ id: 2, qty: 3 }] })
			const expectedCart = {
				items: [
					{ product: { id: 1 }, qty: 2 },
					{ product: { id: 2 }, qty: 3 }
				]
			}
			expect(response.body.data).toMatchObject(expectedCart)
			done()
		})
		it("should remove an item if the quantity is set to 0", async done => {
			const response = await agent
				.post("/cart/update")
				.send({ updates: [{ id: 1, qty: 0 }] })
			const expectedCart = {
				items: [],
				total: 0
			}
			expect(response.body.data).toMatchObject(expectedCart)
			done()
		})
	})

	afterAll(async done => {
		await destroyConnection()
		done()
	})
})

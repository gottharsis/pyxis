// @flow
import { getProduct, getProducts } from "../../db/product"
import { destroyConnection } from "../../db/database"
import range from "lodash/range"

describe("Product DB Tests", () => {
	describe("getProduct", () => {
		it("should return the product with a valid id", async done => {
			const goal = {
				id: 1,
				name: "Awesome Granite Chicken",
				price: "109.00",
				imageURL: "http://lorempixel.com/250/250",
				description: "Vitae et architecto nihil architecto."
			}

			const result = await getProduct(1)
			Object.keys(goal).forEach(key => expect(result).toHaveProperty(key))
			done()
		})

		it("should fail with an invalid id", async done => {
			const badId = 200
			expect(getProduct(badId)).rejects.toThrow(
				/No product with id (\d+)/
			)
			done()
		})
	})

	describe("getProducts", () => {
		it("should return first 10 objects without any parameters", async done => {
			const result = await getProducts()
			const resultIds = result.map(i => i.id)
			const expectedIds = range(1, 11)
			expect(resultIds).toEqual(expect.arrayContaining(expectedIds))
			done()
		})

		it("should return objects 11-20 with an offset of 10", async done => {
			const result = await getProducts({ offset: 10 })
			const resultIds = result.map(i => i.id)
			const expectedIds = range(11, 21)
			expect(resultIds).toEqual(expect.arrayContaining(expectedIds))
			done()
		})

		it("should return first 5 objects with a limit of 5", async done => {
			const result = (await getProducts({ limit: 5 })).map(i => i.id)
			const expected = range(1, 6)
			expect(result).toEqual(expect.arrayContaining(expected))
			done()
		})

		it("should return objects 11-15 with limit 5 and offset 10", async done => {
			const result = await getProducts({ limit: 5, offset: 10 }).then(
				res => res.map(i => i.id)
			)
			const expected = range(11, 16)
			expect(result).toEqual(expect.arrayContaining(expected))
			done()
		})

		it("should return empty array if offset is greater than number of items", async done => {
			const offset = 100
			const result = await getProducts({ offset })
			expect(result).toHaveProperty("length", 0)
			done()
		})
	})

	// close db connection
	afterAll(async done => {
		await destroyConnection()
		done()
	})
})

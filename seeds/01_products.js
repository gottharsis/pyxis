const faker = require("faker")

const createFakeProduct = () => ({
	name: faker.commerce.productName(),
	price: faker.commerce.price(),
	imageURL: faker.image.imageUrl(250, 250),
	description: faker.lorem.sentence()
})
exports.seed = function(knex, Promise) {
	// Inserts seed entries
	const fakeData = []
	const desiredFakeData = 50

	for (let i = 0; i < desiredFakeData; i++) {
		fakeData.push(createFakeProduct())
	}
	return knex("products").insert(fakeData)
}

const items = require("../items.json")
exports.seed = function(knex, Promise) {
	// Inserts seed entries
	return knex("products").insert(items)
}

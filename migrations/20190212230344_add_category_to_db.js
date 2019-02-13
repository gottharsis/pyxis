exports.up = function(knex, Promise) {
	knex.schema.table("products", function(table) {
		table.string("category").notNullable()
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.table("products", function(table) {
		table.dropColumn("category")
	})
}

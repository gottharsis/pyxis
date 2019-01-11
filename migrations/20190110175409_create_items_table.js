exports.up = function(knex, Promise) {
	return knex.schema.createTable("products", table => {
		table.increments("id")
		table.string("name").notNullable()
		table.decimal("price").notNullable()
		table.string("imageURL").notNullable()
		table.string("description").notNullable()
	})
}

exports.down = function(knex, Promise) {
	return knex.schema.dropTable("products")
}

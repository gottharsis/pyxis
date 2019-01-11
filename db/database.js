// @flow
import knex from "knex"
import dotenv from "dotenv"
dotenv.config()

const db = knex({
	client: "pg",
	connection: {
		host: process.env.PGHOST,
		user: process.env.PGUSER,
		password: process.env.PGPASSWORD,
		database: process.env.PGDATABASE
	}
})

export default db

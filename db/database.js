// @flow
import dotenv from "dotenv"
dotenv.config()

let knex

if (process.env.NODE_ENV === "production") {
	knex = require("knex")({
		client: "pg",
		connection: process.env.DATABASE_URL + "?ssl=true"
	})
} else {
	knex = require("knex")({
		client: "pg",
		connection: {
			host: process.env.PGHOST,
			user: process.env.PGUSER,
			password: process.env.PGPASSWORD,
			database: process.env.PGDATABASE
		}
	})
}

// for testing only
export const destroyConnection = () => knex.destroy()

export default knex

// @flow
import db from "./database"
import type { Product } from "../models/product"
import isNil from "lodash/isNil"

export const getProduct = async (id: number): Promise<Product> => {
	const products_db = db("products")
	try {
		const queryResult = await products_db.where({ id }).first()
		if (!isNil(queryResult)) {
			return queryResult
		} else {
			throw new Error(`No product with id ${id}`)
		}
	} catch (e) {
		throw new Error(e)
	}
}

export type getProductsArgs = {
	limit?: number,
	offset?: number
}

export const getProducts = async ({
	limit = 10,
	offset = 0
}: getProductsArgs = {}): Promise<Product[]> => {
	const products_db = db("products")
	try {
		const queryResult = await products_db.limit(limit).offset(offset)
		return queryResult
	} catch (e) {
		console.error(e)
		throw new Error("Database Query Failed!")
	}
}

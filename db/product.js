// @flow
import db from "./database"
import { IProduct } from "../models/product"

const products_db = db("products")

export const getProduct = async (id: number): Promise<IProduct> => {
	try {
		const queryResult = await products_db
			.where({ id })
			.limit(1)
			.select("*")
		return queryResult[0]
	} catch (e) {
		throw new Error(e)
	}
}

interface IGetProducts {
	limit?: number;
	offset?: number;
}

export const getProducts = async (
	limit = 10,
	offset = 0
): Promise<IProduct[]> => {
	try {
		const queryResult = await products_db.limit(limit).offset(offset)
		return queryResult
	} catch (e) {
		console.error(e)
		throw new Error("Database Query Failed!")
	}
}

// @flow
import type { $Request } from "express"
import Cart from "./cart"
import { getProduct } from "../db/product"
import _ from "lodash"

const initializeCart = (req: $Request): Cart => {
	if (req.session.hasOwnProperty("cart")) {
		return new Cart(req.session.cart)
	} else {
		return new Cart()
	}
}
export const getCart = (req: $Request): Cart => {
	const cart = initializeCart(req)
	cart.saveCart(req)
	return cart
}

export const addToCart = async (
	id: number,
	qty: number,
	req: $Request
): boolean => {
	const cart = initializeCart(req)
	try {
		const product = await getProduct(id)
		if (_.isNil(product)) {
			return false
		}
		cart.addToCart(product, qty)
		cart.saveCart(req)
		return true
	} catch (e) {
		return false
	}
}

export const updateCart = async (updates: Array, req: $Request) => {
	if (!_.isNil(updates) && !_.isEmpty(updates)) {
		const cart = initializeCart(req)
		await cart.updateCart(updates)
		cart.saveCart(req)
	}
}

export const removeFromCart = (id: number, req: $Request): boolean => {
	const cart = initializeCart(req)
	if (!cart.itemInCart(id)) {
		return false
	} else {
		cart.removeFromCart(id)
		cart.saveCart(req)
		return true
	}
}

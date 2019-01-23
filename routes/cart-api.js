// @flow
import type { $Request, $Response } from "express"
import { Router } from "express"
import Cart from "../lib/cart"
import { getProduct } from "../db/product"
import _ from "lodash"

function initializeCart(req: $Request): Cart {
	if (req.session.hasOwnProperty("cart")) {
		return new Cart(req.session.cart)
	} else {
		return new Cart()
	}
}

const router = new Router()

router.get("/", (req: $Request, res: $Response) => {
	const cart = initializeCart(req)
	cart.saveCart(req)
	res.json(cart.data)
})

router.get("/add/:id/:qty", async (req: $Request, res: $Response) => {
	const id = parseInt(req.params.id)
	const qty = parseInt(req.params.qty)
	if (isNaN(id) || isNaN(qty)) {
		res.status(400).send("Invlaid numbers")
	} else {
		try {
			const product = await getProduct(id)
			if (_.isNil(product)) {
				console.log(`Error: product id ${id} is nil`)
			} else {
				const cart = initializeCart(req)
				cart.addToCart(product, qty)
				cart.saveCart(req)
				res.json(cart.data)
			}
		} catch (e) {
			console.error(e)
			res.send(400)
		}
	}
})

router.get("/remove/:id", async (req: $Request, res: $Response) => {
	const id = parseInt(req.params.id)
	const cart = initializeCart(req)
	if (isNaN(id)) {
		res.status(400).send("Invalid ID")
	} else if (!cart.itemInCart(id)) {
		res.status(400).send("Item not in cart")
	} else {
		cart.removeFromCart(id)
		cart.saveCart(req)
		res.json(cart.data)
	}
})

router.post("/update", async (req: $Request, res: $Response) => {
	const updates = req.body.updates
	const cart = initializeCart(req)
	if (!_.isNil(updates) && !_.isEmpty(updates)) {
		await cart.updateCart(updates)
	}
	cart.saveCart(req)
	res.json(cart)
})
export default router

// @flow
import type { $Request, $Response } from "express"
import { Router } from "express"
import { getCart, addToCart, updateCart, removeFromCart } from "../lib/cart-api"

const router = new Router()

router.get("/", (req: $Request, res: $Response) => {
	const cart = getCart(req)
	res.json(cart.data)
})

router.get("/add/:id/:qty", async (req: $Request, res: $Response) => {
	const id = parseInt(req.params.id)
	const qty = parseInt(req.params.qty)
	if (isNaN(id) || isNaN(qty)) {
		res.status(400).send("Invlaid numbers")
	} else {
		const added = await addToCart(id, qty, req)
		if (!added) {
			res.status(400).send(`Item with id ${id} doesn't exist!`)
		} else {
			const cart = getCart(req)
			res.json(cart.data)
		}
	}
})

router.get("/remove/:id", async (req: $Request, res: $Response) => {
	const id = parseInt(req.params.id)
	if (isNaN(id)) {
		res.status(400).send("Invalid ID")
	} else {
		const removed = await removeFromCart(id, req)
		if (removed) {
			const cart = getCart(req)
			res.json(cart.data)
		} else {
			res.status(400).send("Item not in cart")
		}
	}
})

router.post("/update", async (req: $Request, res: $Response) => {
	const updates = req.body.updates
	await updateCart(updates, req)
	const cart = getCart(req)
	res.json(cart.data)
})
export default router

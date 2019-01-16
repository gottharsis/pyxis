// @flow
import type { $Request, $Response } from "express"
import { Router } from "express"
import Cart from "../lib/cart"
import { getProduct } from "../db/product"
import _ from "lodash"

const router = new Router()

router.get("/", (req: $Request, res: $Response) => {
	res.json(Cart.data)
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
				Cart.addToCart(product, qty)
				res.json(Cart.data)
			}
		} catch (e) {
			console.error(e)
			res.send(400)
		}
	}
})

export default router

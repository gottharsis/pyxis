// @flow
import { getProducts, getProduct } from "../db/product"
import type { $Request, $Response } from "express"
import { Router } from "express"
import _ from "lodash"

const router = new Router()

router.get("/merch", async (req: $Request, res: $Response) => {
	try {
		const items = await getProducts()
		res.render("merch", { title: "Merch", items })
	} catch (e) {
		res.status(400).send("Merch error")
	}
})

router.get("/view-product", (req: $Request, res: $Response) => {
	res.redirect("/merch")
})

router.get("/view-product/:id", async (req: $Request, res: $Response) => {
	const id = _.parseInt(req.params.id)
	if (isNaN(id)) {
		res.redirect("/merch")
	} else {
		const item = await getProduct(id)
		const { name } = item
		res.render("view-product", { title: name, item })
	}
})

export default router

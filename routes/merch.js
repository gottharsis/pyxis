// @flow
import { getProducts, getProduct } from "../db/product"
import type { $Request, $Response } from "express"
import { Router } from "express"

const router = new Router()

router.get("/merch", async (req: $Request, res: $Response) => {
	try {
		const items = await getProducts()
		res.render("merch", { title: "Merch", items })
	} catch (e) {
		res.status(400).send("Merch error")
	}
})

router.get("/view-item", (req: $Request, res: $Response) => {
	res.redirect("/merch")
})

router.get("/view-item/:id", async (req: $Request, res: $Response) => {
	const id = req.params.id
	const item = await getProduct(id)
	const { name } = item
	res.render("view-product", { title: name, item })
})

export default router

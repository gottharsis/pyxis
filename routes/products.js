import { Router } from "express"
import { getProduct, getProducts } from "../db/product"

const router = new Router()

router.get("/", async (req, res) => {
	try {
		const items = await getProducts()
		res.json(items)
	} catch (error) {
		console.error(error)
	}
})

router.get("/:id", async (req, res) => {
	try {
		const item = await getProduct(req.params.id)
		res.json(item)
	} catch (error) {
		console.error(error)
	}
})

export default router

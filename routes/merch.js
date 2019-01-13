// @flow
import { getProducts, getProduct } from "../db/product"
import { Router } from "express"

const router = new Router()

router.get("/merch", async (req, res) => {
	const items = await getProducts()
	res.render("merch", { title: "Merch", items })
})

router.get("/view-item", (req, res) => {
	res.redirect("/merch")
})

router.get("/view-item/:id", async (req, res) => {
	const id = req.params.id
	const item = await getProduct(id)
	const { name } = item
	res.render("view-product", { title: name, item })
})

export default router

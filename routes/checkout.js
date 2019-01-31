import { Router } from "express"
import { getCart } from "../lib/cart-api"

const router = Router()

router.get("/", (req, res) => {
	const cart = getCart(req)
	const { total } = cart.data
	res.render("checkout", { title: "Checkout", total })
})

export default router

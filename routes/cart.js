import { Router } from "express"
import { getCart } from "../lib/cart-api"

const router = Router()

router.get("/", (req, res) => {
	const cart = getCart(req)
	const items = cart.data.items.map(item => {
		const totalCost = item.product.price * item.qty
		return {
			...item,
			totalCost
		}
	})
	const { total } = cart.data
	res.render("cart", { title: "Cart", items, total })
})

export default router

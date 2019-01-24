// @flow
import type { Product } from "../models/product"
import type { $Request } from "express"
import { getProduct } from "../db/product.js"
import _ from "lodash"

type CartData = {
	items: CartProduct[],
	total: number
}

type CartProduct = {
	product: Product,
	qty: number
}

type UpdateCartChange = {
	id: number,
	qty: number
}

class Cart {
	data: CartData = {
		items: [],
		total: 0
	}

	constructor(cart: CartData = {}) {
		const newData = Object.assign({}, this.data, cart)
		this.data = newData
	}

	itemInCart(productId: number): boolean {
		const result = this.data.items.find(
			item => item.product.id === productId
		)
		return !_.isNil(result)
	}

	addToCart(product: Product, qty: number): void {
		const productIndex = this.data.items.findIndex(
			item => item.product.id === product.id
		)
		if (productIndex !== -1) {
			this.data.items[productIndex].qty += qty
		} else {
			this.data.items.push({ product, qty })
		}
		this.calculateCost()
	}
	async updateCart(changes: UpdateCartChange[]) {
		await Promise.all(
			changes.map(async ({ id, qty }) => {
				if (qty > 0) {
					const index = this.data.items.findIndex(
						item => item.product.id === id
					)
					if (index === -1) {
						const product = await getProduct(id)
						this.addToCart(product, qty)
					} else {
						this.data.items[index].qty = qty
					}
				} else if (qty === 0) {
					this.removeFromCart(id)
				}
			})
		)
	}

	calculateCost(): number {
		let total = 0
		this.data.items.forEach(
			({ product, qty }) => (total += product.price * qty)
		)
		this.data.total = total
		return total
	}

	removeFromCart(productId: number) {
		if (!this.itemInCart(productId)) {
			return
		}
		const newItems = this.data.items.filter(a => a.product.id !== productId)
		this.data.items = newItems
		this.calculateCost()
	}

	saveCart(request: $Request) {
		if (request.session) {
			request.session.cart = this.data
		}
	}
}

export default Cart
